import Head from 'next/head'

export default function Home() {
  return (
    <div className='px-10 bg-ikkiarBgGray2 flex-col content-center justify-center mt-10 rounded-md overflow-hidden'>
      <Head>
        <title>🐒 Ikkiar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>


      <div className='flex justify-center'>
        <div className='flex-col justify-center'>
          <h1 className="text-4xl font-bold underline pt-5">
            🐒 Ikkiar 👋
          </h1>
          <div className='flex justify-center pt-5 text-lg'>
            Welcome to Ikkiar's nest
          </div>
        </div>
      </div>
     
  
      <div className='flex justify-center mt-10'>
        <div className='flex-col max-w-md'>
            <h1 className='text-2xl font-bold'>
              What is Ikkiar?
            </h1>
            <div className='flex-wrap justify-center pt-4'>
              Ikkiar is a Discord bot that runs inhouses. Join the inhouse server <a className='text-md text-discord' href='https://discord.gg/HwhMkRxaWX'> here 🎮</a>
            </div>
        </div>
      </div>
     


      <div className='flex justify-center mt-5'>
       <div className='flex-col max-w-md'>
            <h1 className='text-2xl font-bold my-5'>
              Queue
            </h1>
            <div className=''>

              once in discord use Ikkiar's queue client in <p className='inline-block bg-discord rounded-discord px-1 text-ikkiarWhite'>#🐒queue</p> channel. 
              Queue to your destined role by pressing one of the role buttons. 
              You can cancel the queue at any point by pressing the button marked with X. <br></br><br></br>
              Ikkiar creates a lobby from queued Summoners once there are at least 2 Summoners per role.
              This emits a Queue Pop. The Summoners in the lobby can choose to either Accept or Decline the queue by reacting with ✅/❌.
              
              <br></br><br></br>
              Summoners who declined the queue will be removed from the lobby and the queue. Ikkiar keeps forming new lobbies as long
              as there are valid lobbies to form.
              If all ten Summoners in the lobby Accept the match, Ikkiar matchmakes them into a game.
              Matchmaking is done randomly at the moment.
            </div>
       </div>
      </div>

      <div className='flex justify-center '>
        <div className='flex-col max-w-md'>
          <h1 className='text-2xl font-bold my-5'>
            Match
          </h1>
          <div className='justify-center pt-4 '>
          After matching the Summoners one of the Summoners have to create a Custom Game and include 'ikkiar' in its' name.
          This way the match played can be submitted and validated later on. Ikkiar scores Summoners when one of them submits
          the match by sending the .rofl replay file to the <p className='inline-block bg-discord rounded-discord px-1 font-medium text-ikkiarWhite'>#🐒submitmatch</p> channel.
        </div>
        </div>
      </div>
     
      <div className='flex justify-center '>

      <div className='flex-col max-w-md'>
        <h1 className='text-2xl font-bold my-5'>
          Commands
        </h1>
        <div className='justify-center pt-4 mb-10'>
        Use commands in the  <p className='inline-block bg-discord rounded-discord px-1 font-medium text-ikkiarWhite'>#🐒spam</p> channel.
        Commands available for everyone are:
        <div className='pt-3'>
          <p className='inline-block bg-green rounded-discord px-1 mx-1 font-medium text-gray-dark'>/decide</p>
          <p className='inline-block bg-green rounded-discord px-1 mx-1 font-medium text-gray-dark'>/greet</p>
          <p className='inline-block bg-green rounded-discord px-1 mx-1 font-medium text-gray-dark'>/huutista</p>
          <p className='inline-block bg-green rounded-discord px-1 mx-1 font-medium text-gray-dark'>/ismo</p>
        </div>
      </div>



      </div>
      </div>
    </div>
  )
}
