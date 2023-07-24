
import { categoryFilters } from "@/constants";
import Image from "next/image";
import CustomMenu from "./CustomMenu";
import FormField from "./FormField";

const BlogForm = ({ type, form,setForm, submitting, handleSubmit,handleChangeImage,handleStateChange }) => {

  

  return (
    <form onSubmit={handleSubmit} className="flexStart form">
      <div className="flexStart form_image-container">
        <label htmlFor="poster" className="flexCenter form_image-label">
          {!form.image && "Choose a poster for Thumbnail"}
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          required={type === "create"}
          className="form_image-input"
          onChange={(e) => handleChangeImage(e)}
        />
        {form.image && (
          <Image
            src={form?.image}
            className="sm:p-10 object-contain z-20"
            alt="image"
            fill
          />
        )}
      </div>
      <FormField
        title="Title"
        state={form.title}
        placeholder="Title here"
        setState={(value) => handleStateChange("title", value)}
      />
      <FormField
        title="Idea"
        state={form.idea}
        placeholder="Main idea here"
        setState={(value) => handleStateChange("idea", value)}
      />
      <FormField
        title="Description"
        state={form.description}
        placeholder="write your blog here."
        isTextArea
        setState={(value) => handleStateChange("description", value)}
      />
      
      <CustomMenu
        title="Category"
        state={form.category}
        filters={categoryFilters}
        setState={(value) => handleStateChange("category", value)}
      />
      <div className="flexStart w-full">
        {/* <Button
                    title={submitting ? `${type === "create" ? "Creating" : "Editing"}` : `${type === "create" ? "Create" : "Edit"}`}
                    type="submit"
                    leftIcon={submitting ? "" : "/plus.svg"}
                    submitting={submitting}
                /> */}
        <button type="submit" disabled={submitting || false} className={`flexCenter gap-3 px-3 py-3 text-white bg-black rounded-xl text-sm font-medium max-md:w-full`} >
          Create
          {submitting && ("...")}
        </button>
      </div>
    </form>
  );
};

export default BlogForm;
