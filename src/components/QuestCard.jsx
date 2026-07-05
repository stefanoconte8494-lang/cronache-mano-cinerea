import "../styles/cards.css";

export default function QuestCard({ quest }) {
  return (
    <article className="quest-card">
      <p className="quest-status">{quest.status}</p>
      <h3>{quest.title}</h3>
      <p>{quest.place}</p>
    </article>
  );
}
