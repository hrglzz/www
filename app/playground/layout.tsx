export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <section>
        {children}
      </section>
    </div>   
  )
}