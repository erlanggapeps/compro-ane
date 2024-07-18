"use client"
import Image from "next/image";
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'


export default function Card() {
    const [emblaRef] = useEmblaCarousel()
    const data = [
        { gambar: '/teamPhoto/team1.png', nama: 'Fikar', desc: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam natus quisquam vel illum aliquid temporibus nulla perspiciatis, soluta id voluptate tempore laudantium"', post:'Web Development' },
        { gambar: '/teamPhoto/team2.png', nama: 'Farrous', desc: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam natus quisquam vel illum aliquid temporibus nulla perspiciatis, soluta id voluptate tempore laudantium"', post:'Web Development' },
        { gambar: '/teamPhoto/team3.png', nama: 'Ai', desc: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam natus quisquam vel illum aliquid temporibus nulla perspiciatis, soluta id voluptate tempore laudantium"', post:'Web Development' },
        { gambar: '/teamPhoto/team4.png', nama: 'Uqi', desc: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam natus quisquam vel illum aliquid temporibus nulla perspiciatis, soluta id voluptate tempore laudantium"', post:'Web Development' },
        { gambar: '/teamPhoto/team5.png', nama: 'Dede', desc: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam natus quisquam vel illum aliquid temporibus nulla perspiciatis, soluta id voluptate tempore laudantium"', post:'Web Development' },

    ]
    return (
        <div className="flex mx-auto my-8 max-w-7xl gap-10">
            {data.map((item, idx) => (
                <div key={idx} className="card card-side bg-base-100 h-96 shadow-xl inline-flex">
                    <figure className="overflow-x-scroll w-[900px]">
                        <Image
                            width={25}
                            height={25}
                            className="w-80"
                            src={item.gambar}
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.nama}</h2>
                        <h3 className="font-semibold">{item.post}</h3>
                        <p className="font-light">{item.desc}</p>
                    </div>
                </div>
            ))}
          
        </div>
    )
}