"use client";

import BlogForm from "@/components/BlogForm";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";



const CreateBlog = ({project}) => {

  const router = useRouter();
  const { data: session } = useSession();

  if (!session?.user) {
    redirect("/");
  }


  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    title: project?.title || "",
    description: project?.description || "",
    idea: project?.idea || "",
    image: project?.image || "",
    category: project?.category || "",
  });


  const uploadImage = async (imagePath) => {
    try {
      const response = await fetch(`/api/upload`, {
        method: "POST",
        body: JSON.stringify({
          path: imagePath,
        }),
      },{
        cache: "no-store",
      });
      return response.json();
    } catch (err) {
      throw err;
    }
  };

  const handleStateChange = (fieldName, value) => {
    setForm((prevForm) => ({ ...prevForm, [fieldName]: value }));
  };

  const handleChangeImage = (e) => {
    e.preventDefault();

    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.includes("image")) {
      alert("Please upload an image!");

      return;
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      const result = reader.result;

      handleStateChange("image", result);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const imageUrl = await uploadImage(form.image);
      const response = await fetch('/api/blogs/new',{
          method:'POST',
          body: JSON.stringify({
            userId : session?.user.id,
            title: form.title,
            description: form.description,
            idea: form.idea,
            image:imageUrl.url,
            category: form.category
          },{
            cache: "no-store",
          })
      })
      
      
      
      if(response.ok){
        router.refresh();
        router.push('/')
      }
  } catch (error) {
      console.log(error);
  } finally{
      setSubmitting(false);
  }
  };

  

  return (
    <div className="flex flex-col flexCenter">
      <h3 className="modal-head-text">Write a New Blog</h3>

      <BlogForm 
      type="create" 
      form={form}
      setForm={setForm}
      submitting={submitting}
      handleSubmit={handleSubmit}
      handleStateChange={handleStateChange}
      handleChangeImage={handleChangeImage}
       />
    </div>
  );
};

export default CreateBlog;
