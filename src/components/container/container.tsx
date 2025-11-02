export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginTop: 5, paddingLeft: 20, paddingRight: 20 }}>
      {children}
    </div>
  );
}
