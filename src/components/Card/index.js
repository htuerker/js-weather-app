import './styles.scss';

export default function Card(child) {
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';
  cardDiv.appendChild(child);

  return cardDiv;
}
