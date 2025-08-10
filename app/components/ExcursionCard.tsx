export default function ExcursionCard({
  title,
  id,
  createdAt,
  numberOfParticipants,
}: {
  title?: string;
  id?: string;
  createdAt?: string;
  numberOfParticipants?: number;
}) {
  return (
    <div className="card w-72 flex grow bg-base-100 card-md shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Large Card</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
