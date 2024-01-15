export default function ImmobilienmarktLayout({
    children
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className='bg-transparent my-20'>
            {children}
        </div>
    )
  }