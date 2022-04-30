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
      <div className='flex justify-center'>
        Welcome to Ikkiar's nest
      </div>
      <div className='flex justify-center'>
        This page holds information about Summoners playing in the Ikkiar inhouse
      </div>

      <div className='flex justify-center mt-10'>
        <h1 className='text-xl font-bold'>
          What is Ikkiar?
        </h1>
      </div>
      <div className='flex justify-center'>
        Ikkiar is a Discord bot that runs inhouses. To join the inhouse
        join to the server Ikkiar resides in:
      </div>

      <div className='flex justify-center mt-5'>
        <h1 className='text-xl font-bold'>
          Queue
        </h1>
      </div>
      <div className='flex justify-center'>
        once in discord use Ikkiar's queue client in #🐒queue channel. 
        Queue to your destined role by pressing one of the role buttons. 
        You can cancel your queue at any point by pressing the button marked with X. <br></br><br></br>
        Ikkiar creates a lobby from queued Summoners once there are at least 2 Summoners per role.
        This emits a Queue Pop. The Summoners in the lobby can choose to either Accept or Decline the queue by reacting with ✅/❌.
        
        <br></br><br></br>
        Summoners who declined the queue will be removed from the lobby and the queue. Ikkiar keeps forming new lobbies as long
        as there are valid lobbies to form.
        If all ten Summoners in the lobby Accept the match, Ikkiar matchmakes them into a game.
        Matchmaking is done randomly and at the moment
      </div>

      <div className='flex justify-center mt-10'>
        <h1 className='text-xl font-bold'>
          Match
        </h1>
      </div>
      <div className='flex justify-center'>
        After matching the Summoners one of the Summoners have to create a Custom Game and include 'ikkiar' in its' name.
        This way the match played can be submitted and validated later on. Ikkiar scores Summoners when one of them submits
        the match by using a /submitmatch + gameId command in Discord.
      </div>

    </div>
  )
}
