import Image from 'next/image'
import EvImage from '@/assets/images/ev.svg'
import Call from '@/assets/svgs/Call'
import Mail from '@/assets/svgs/Mail'
import Insta from '@/assets/svgs/Insta'
import Map from '@/assets/svgs/Map'
import Send from '@/assets/svgs/Send'
import { useState } from 'react'
import { toast } from 'react-hot-toast'


export default function Section5() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSending, setIsSending] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.email || !formData.message || !formData.first_name || !formData.last_name || !formData.phone) {
      toast.error('Semua field wajib diisi!')
      return
    }

    try {
      setIsSending(true)
      console.log('Data yang dikirim:', formData) // Debugging

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success('Email Sent Successfully!')
        setFormData({
          email: '',
          message: '',
          first_name: '',
          last_name: '',
          phone: '',
        })
      } else {
        const errorData = await response.json()
        console.log('Error:', errorData)
      }
    } catch (error) {
      toast.error('Error sending email:', error)
    } finally {
      setIsSending(false)
    }
  }
  return (
    <section className="relative flex flex-col items-center justify-center px-0 py-10 overflow-hidden" id="contact">
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[311px] h-[311px] 
  bg-[radial-gradient(circle,_rgba(68,194,161,0.5)_0%,_transparent_90%)] 
  md:bg-none lg:bg-[radial-gradient(circle,_rgba(68,194,161,0.5)_0%,_transparent_90%)] 
  blur-3xl hidden sm:block"
      ></div>

      <div
        className="absolute right-0 top-1/3 -translate-y-1/2 w-[311px] h-[311px] 
  bg-[radial-gradient(circle,_rgba(68,194,161,0.5)_0%,_transparent_90%)] 
  md:bg-none lg:bg-[radial-gradient(circle,_rgba(68,194,161,0.5)_0%,_transparent_90%)] 
  blur-3xl hidden sm:block"
      ></div>

      <div className="text-center mb-6">
        <h1 className="text-xl font-medium">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#121212] from-primary-n1 dark:to-white">Reach Us</span>
        </h1>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2">
          GET IN <span className="text-primary-n1">TOUCH</span>
        </h1>
        <p className="text-xs md:text-lg lg:text-xl text-foreground-2 mb-2">
          Mari berkolaborasi dan ciptakan sesuatu yang luar biasa.
          <br />
          Ada saran atau masukan? Jangan ragu untuk menghubungi kami.
        </p>
      </div>

      <div className="w-full px-4">
        <div className="max-w-3xl mx-auto">
          <div className="shadow-lg rounded-3xl sm:rounded-4xl overflow-hidden grid grid-cols-1 md:grid-cols-[65%_35%] dark:border-gray-500">
            <div className="p-6 md:p-8lg:p-10 bg-white dark:bg-black">
              <h2 className="text-xl font-bold text-gray-800  dark:text-white">Kirimkan Pesan</h2>

              <form className="mt-4" onSubmit={handleSubmit} data-aos="fade-down">
                <div className="flex flex-col md:flex-row gap-4 mb-3">
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="w-full px-0 py-2.5 text-md text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none  dark:text-white"
                    placeholder="Nama Depan"
                    required
                  />
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="w-full px-0 py-2.5 text-md text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none  dark:text-white"
                    placeholder="Nama Belakang"
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-4 mb-3">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-0 py-2.5 text-md text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none  dark:text-white"
                    placeholder="Email"
                    required
                  />
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-0 py-2.5 text-md text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none  dark:text-white"
                    placeholder="No. Telp"
                    required
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-0 py-2 text-gray-900 bg-transparent border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none  dark:text-white"
                    placeholder="Apa yang ingin anda sampaikan?"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button className="bg-primary-n1 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-[#3bb99a]">
                    <Send className="fill-white" />
                    {isSending ? <span className="fill-white">Loading...</span> : <span className="fill-white">Kirim</span>}
                  </button>
                </div>
              </form>
            </div>

            <div className="relative p-4 bg-[#44c2a1] bg-gradient-to-t from-primary-n1 text-white rounded-r-3xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold">Hubungi Kami</h3>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center space-x-3">
                    <Call className="fill-white" />
                    <p className="text-sm">+62 851-4116-8042</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="fill-white" />
                    <p className="text-sm">flyhighsinergi.idn@gmail.com</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Insta className="fill-white" />
                    <p className="text-sm">flyhighcorp_</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Map className="fill-white" />
                    <p className="text-sm">Klampis, Surabaya</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 right-4">
                <div className="w-[100px] md:w-[150px] h-auto">
                  <Image src={EvImage} alt="EV Logo" className="w-full h-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
