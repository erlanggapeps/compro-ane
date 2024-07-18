import Image from "next/image"

interface IProps {
    name: {
        first: string
        last: string
    },
    picture: {
        large: string
    },
    email: string
}

export default async function Teamcards() {
    const teamfetch = await fetch('https://randomuser.me/api/?results=10')
    const data = await teamfetch.json()
    return (
        <div>
            {data.results.map((item: IProps, idx: number) => (
                <div className="flex flex-wrap justify-center gap-7 pb-7 lg:inline-flex lg:p-7" key={item.email}>
                    <div className="card card-compact bg-base-100 w-96 shadow-xl">
                        <figure>
                            <Image src={item.picture.large} width={380} height={300} alt="pic" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.name.first} {item.name.last}</h2>
                            <p>{item.email}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}