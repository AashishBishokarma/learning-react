export default function CurrentTime() {
  let time = new Date();
  return (
    <p className="lead">
      This is The Current Time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}
    </p>
  );
}
