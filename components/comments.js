import Date from "./date";

export default function Comments({ comments = [] }) {
  return (
    <>
      <h2 className="home-title-font mt-10 mb-4 text-4xl lg:text-4xl leading-tight">
        Comments:
      </h2>
      <ul className="font-serif ">
        {comments?.map(({ _id, _createdAt, name, email, comment }) => (
          <li
            key={_id}
            className="mb-4 mr-44 border border-gray-600 shadow-md rounded-xl p-1"
          >
            <p className="font-bold text-xl mt-4">{comment}</p>
            <h4 className="mb-2 leading-tight text-base">
              {name} (
              <Date dateString={_createdAt} />)
            </h4>
          </li>
        ))}
      </ul>
      <h2 className="home-title-font mt-12 text-4xl lg:text-4xl leading-tight">
        Add your comment:
      </h2>
    </>
  );
}
