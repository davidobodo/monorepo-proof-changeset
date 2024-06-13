export default function Button({ text, onClick }: { text: string; onClick: () => void }) {
	return (
		<button onClick={onClick} style={{ color: "blue", backgroundColor: "white", borderRadius: "6px" }}>
			{text}
		</button>
	);
}
