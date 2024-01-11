export default function RatgeberLayout({
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