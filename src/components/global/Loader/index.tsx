interface LoaderProps {
  h?: string;
  w?: string;
  color?: string;
}

const Loader = ({ h = "50px", w = "50px", color = "#150b70" }: LoaderProps) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="animate-spin rounded-full border-b-2"
        style={{ width: w, height: h, borderColor: color }}
      />
    </div>
  );
};

export default Loader;
