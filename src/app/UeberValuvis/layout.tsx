export default function UeberValuvisLayout({
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