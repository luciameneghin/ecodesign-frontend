import React from 'react'

const HomeInfoSection = () => {
  return (
    <>
      <div className='bg-[#eeedeb] py-20'>
        <div className='flex container mx-auto grid-cols-2 gap-40 pr-20 items-center'>
          <div className='mx-20'>
            <h1 className='font-bold text-3xl mb-5'>Milano Design Week 2025</h1>
            <p className='text-justify mb-4'>La Milano Design Week 2025 ha confermato il legno come protagonista indiscusso, celebrando la sua versatilità e sostenibilità attraverso numerose installazioni e collaborazioni.
            </p>
            <p className='text-justify mb-4'>
              Listone Giordano ha presentato due collezioni emblematiche: "Nui", ispirata all'arte giapponese del Sashimono e firmata da Piero Lissoni, e "Trafic", una reinterpretazione contemporanea dei pavés de bois ottocenteschi, progettata da Marc Sadler. Entrambe le linee evidenziano l'eccellenza artigianale e l'innovazione nel trattamento del legno.
            </p>

            <p className='text-justify mb-4'>
              Riva, in collaborazione con IED Roma e Legambiente, ha presentato "Tutte le vite del Legno", un progetto che esplora il rapporto tra design e sostenibilità attraverso oggetti in legno realizzati con un approccio consapevole e rispettoso dell'ambiente.
            </p>

            <p className='text-justify mb-4'>
              Questi sono solo due dei molti brand che si concentrano nell'uso etico del legno hanno partecipato alla Milano Design Week 2025 che, in sintesi, ha celebrato il legno come materiale vivo e dinamico, capace di raccontare storie di tradizione, innovazione e rispetto per l'ambiente.</p>

          </div>
          <div>
            <img src="/images/InfoSection/milano-design-week.jpg" alt="installazione Milano Design Week 2025" />
          </div>
        </div>
      </div>

      <div className='bg-[#e0ccbe] py-20'>
        <div className='flex container mx-auto grid-cols-2 gap-40 items-center'>
          <div className='mx-20'>
            <img src="/images/InfoSection/legno-lab-cover.png" alt="Copertina rivista legnoLab" className='ml-20' />
          </div>
          <div>
            <h1 className='font-bold text-3xl mb-5'>LegnoLab la rivista italiana per gli appassionati del legno</h1>
            <p className='text-justify mb-4'>
              LegnoLab offre contenuti pratici e teorici per conoscere, progettare, costruire e restaurare con questo materiale. La sua missione è promuovere la cultura del legno attraverso articoli tecnici, guide passo-passo, interviste a esperti e approfondimenti su tecniche tradizionali e innovative.
            </p>
            <p className='text-justify mb-4'>
              Ogni numero si concentra su un tema specifico, fornendo ai lettori strumenti e conoscenze per avvicinarsi al mondo del legno in modo consapevole e competente.
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default HomeInfoSection
