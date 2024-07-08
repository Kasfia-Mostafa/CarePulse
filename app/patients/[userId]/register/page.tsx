import Image from "next/image"

const Registration = () => {
  return (
    <div className="flex h-screen max-h-screen">
        <section className="remove-scrollbar container">
            <div className="sub-container max-w-[860pz] flex-1 flex-col py-10">
                <Image 
                src='/assets/icons/logo-full.svg'
                height={1000}
                width={1000}
                alt="carePulse"
                className="mb-12 h-10 w-fit"
                ></Image>
            </div>
        </section>
    </div>
  )
}

export default Registration