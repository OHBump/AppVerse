export default function ReviewSection({ reviews = [], botId }) {
  return (
    <section>
      <h2>Reviews</h2>
      {reviews.length === 0 && <div>No reviews yet.</div>}
      <ul>
        {reviews.map((rev, idx) => (
          <li key={idx}>
            <strong>{rev.rating}/5</strong> – {rev.comment} by {rev.user}
          </li>
        ))}
      </ul>
      {/* Review form can be added here */}
    </section>
  );
}