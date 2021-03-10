import Date from "./date";

export default function Comments({ comments = [] }) {
  return (
    <>
      <h2 className="mt-10 mb-4 text-4xl lg:text-6xl leading-tight">
        Comments:
      </h2>
      <ul className="font-serif divide-y-2">
        {comments?.map(({ _id, _createdAt, name, email, comment }) => (
          <li key={_id} className="mb-4">
            <p className="font-bold text-xl mt-4">{comment}</p>
            <h4 className="mb-2 leading-tight text-base">
              {name} (
              <Date dateString={_createdAt} />)
            </h4>
          </li>
        ))}
      </ul>
    </>
  );
}
