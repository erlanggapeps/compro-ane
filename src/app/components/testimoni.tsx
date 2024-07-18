import Image from 'next/image'
import React from 'react'

export default function Testimoni() {
    const data = [
        { img: './photoTestimoni/001.jpg', nama: 'jamal', email: 'jamal@gamil.com', desc: 'UDARA. adalah produk yang saya tunggu selama ini', alamat: 'Indonesia' },
        { img: './photoTestimoni/002.jpg', nama: 'Sinta', email: 'sinta@gamil.com', desc: 'produk yang tidak mudah dilupakan', alamat: 'Kamboja' },
        { img: './photoTestimoni/003.jpeg', nama: 'Adinda', email: 'adinda@gamil.com', desc: 'diluar ekspetasi saya, keren selalu UDARA.', alamat: 'Malaysia' },          
    ]
    return (
        <div className='w-full bg-slate-500 -z-20 py-14'>
            <div className='flex flex-wrap max-w-7xl items-center justify-center mx-auto gap-5'>
                {data.map((item, key) => (
                    <div key={key}>
                        <div className="card card-compact bg-base-100 w-96 shadow-xl">
                            <figure>
                                <Image
                                    src={item.img}
                                    alt="Shoes"
                                    className='w-full h-[250px] object-cover'
                                    />
                                    
                            </figure>
                            <div className="card-body text-center">
                                <h2 className='text-2xl font-bold text-black'>{item.nama}</h2>
                                <h1>{item.alamat}</h1>
                                <p>{item.email}</p>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
