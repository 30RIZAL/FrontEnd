export default function Header() {
  return (
    <div
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            )`,
      }}
    >
      <section className='relative block h-[500px]'>
        <div className='bg-profile-background bg-cover bg-center absolute top-0 w-full h-full' />
      </section>
    </div>
  );
}
