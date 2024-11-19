export default function AnimatedRoute({ children }) {
  return (
    <div className="animate__animated animate__fadeIn animate__slow">
      {children}
    </div>
  );
}
