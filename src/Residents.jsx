import "./Residents.css";
export default function Residents({ residents }) {
  return (
    <div>
      <h2>Residents List</h2>
      <ul className="residents-list">
        {residents.map((resident, index) => (
          <li className="resident" key={index}>
            {resident}
          </li>
        ))}
      </ul>
    </div>
  );
}
