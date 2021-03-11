import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form({ _id }) {
  const [formData, setFormData] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    let response;
    setFormData(data);
    try {
      response = await fetch("/api/createComment", {
        method: "POST",
        body: JSON.stringify(data),
        type: "application/json",
      });
      setIsSubmitting(false);
      setHasSubmitted(true);
    } catch (err) {
      setFormData(err);
    }
  };

  if (isSubmitting) {
    return <h3>Submitting comment…</h3>;
  }
  if (hasSubmitted) {
    return (
      <>
        <h3>
          Thanks for your comment! It will be published once it has been
          moderated and approved.
        </h3>
        <ul className="w-full max-w-lg mb-4 border border-gray-600 shadow-md rounded-xl p-1">
          <li>
            Your Name: {formData.name} <br />
            Your Email: {formData.email} <br />
            Your Comment: {formData.comment}
          </li>
        </ul>
      </>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full font-serif max-w-lg mb-4 mt-10 border border-gray-600 shadow-md rounded-xl p-1"
      disabled
    >
      <input ref={register} type="hidden" name="_id" value={_id} />
      <label className="block mb-5">
        <span className="text-gray-700">Name</span>
        <input
          name="name"
          ref={register({ required: true })}
          className="form-input mt-1 block w-full"
          placeholder="John Appleseed"
        />
      </label>
      <label className="block mb-5">
        <span className="text-gray-700">Email (Optional)</span>
        <input
          name="email"
          type="email"
          ref={register({ required: false })}
          className="form-input mt-1 block w-full"
          placeholder="your@email.com"
        />
      </label>
      <label className="block mb-5">
        <span className="text-gray-700">Comment</span>
        <textarea
          ref={register({ required: true })}
          name="comment"
          className="form-textarea mt-1 block w-full"
          rows="8"
          placeholder="Enter your comment here"
        ></textarea>
      </label>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <input
        type="submit"
        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
      />
    </form>
  );
}
