import Head from 'next/head'

export default function Home() {
  return (
    <div className='bg-ikkiarBgGray2 flex-col justify-center h-screen mx-128 mt-10 rounded-md overflow-hidden px-36'>
      <Head>
        <title>🐒 Ikkiar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className='flex justify-center'>
        <h1 className="text-4xl font-bold underline pt-5">
          🐒 Ikkiar 👋
        </h1>
      </div>
      <div className='flex justify-center pt-5 text-lg'>
        Welcome to Ikkiar's nest
      </div>
  

      <div className='flex justify-center mt-10'>
        <h1 className='text-xl font-bold'>
          What is Ikkiar?
        </h1>
      </div>
      <div className='flex-wrap justify-center'>
        Ikkiar is a Discord bot that runs inhouses. Join the inhouse <a className='text-md text-discord' href='https://discord.gg/pR4DgC82'> here 🎮</a>
      </div>

      <div className='flex justify-center mt-5'>
        <h1 className='text-xl font-bold'>
          Queue
        </h1>
      </div>
      <div className='justify-center'>

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

      <div className='flex justify-center mt-10'>
        <h1 className='text-xl font-bold'>
          Match
        </h1>
      </div>
      <div className='justify-center'>
        After matching the Summoners one of the Summoners have to create a Custom Game and include 'ikkiar' in its' name.
        This way the match played can be submitted and validated later on. Ikkiar scores Summoners when one of them submits
        the match by using a /submitmatch + gameId command in the <p className='inline-block bg-discord rounded-discord px-1 font-medium text-ikkiarWhite'>#🐒spam</p> Discord channel.
      </div>

      <div className='flex justify-center mt-10'>
        <h1 className='text-xl font-bold'>
          Commands
        </h1>
      </div>
      <div className='justify-center'>
        Use commands in the  <p className='inline-block bg-discord rounded-discord px-1 font-medium text-ikkiarWhite'>#🐒spam</p> channel.
        Commands available for everyone are:
        <div className='pt-3'>
          <p className='inline-block bg-green rounded-discord px-1 mx-1 font-medium text-gray-dark'>/submitmatch [gameId]</p>
          <p className='inline-block bg-green rounded-discord px-1 mx-1 font-medium text-gray-dark'>/decide</p>
          <p className='inline-block bg-green rounded-discord px-1 mx-1 font-medium text-gray-dark'>/greet</p>
          <p className='inline-block bg-green rounded-discord px-1 mx-1 font-medium text-gray-dark'>/huutista</p>
          <p className='inline-block bg-green rounded-discord px-1 mx-1 font-medium text-gray-dark'>/ismo</p>
        </div>
  
      </div>
    </div>
  )
}
