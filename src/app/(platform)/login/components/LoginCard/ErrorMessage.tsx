interface ErrorMessageProps {
  error: string;
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <div className="mb-6 rounded-lg border border-red-500/20 bg-red-500/10 p-4">
      <p className="text-center text-sm text-red-400">{error}</p>
    </div>
  );
}
