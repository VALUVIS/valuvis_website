export default function FAQLayout({
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