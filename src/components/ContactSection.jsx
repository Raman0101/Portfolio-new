// import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
// import { cn } from "../lib/utils"
// import { useToast } from "../hooks/use-toast"
// import { useState } from "react";

// export const ContactSection = () => {

//     const {toast} = useToast();

//     const [isSubmitting,setIsSubmitting] = useState(false);

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         setIsSubmitting(true);


//         setTimeout(() => {
//              toast({
//                 title: "Message sent!",
//                 description : "Thank you for your message. I'll get back to you soon."
//              })
            
//              setIsSubmitting(false);

//         }, 1500);
   
//     } 

//     return(
//         <section 
//         id= "contact"
//         className="py-24 px-4 realtive bg-secondary/30"
//         >
//             <div className="container mx-auto max-w-5xl">
//                 <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center ">
//                     Get In <span className="text-primary"> Touch</span>
//                 </h2>

//                 <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//                     Have a project in mind or want to collaborate? Feel free to reach out.
//                     I'm always open to discussing new opportunities.
//                 </p>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                     <div className="space-y-8">
//                         <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
//                         <div className="space-y-6 justify-center">
//                             <div className="flex items-start space-x-4">
//                                 <div className="p-3 rounded-full bg-primary/10">
//                                     <Mail className="w-6 h-6 text-primary"/>
//                                 </div>
//                                 <div className="text-start">
//                                     <h4 className="font-medium"> Email</h4>
//                                     <a 
//                                     href="mailto:akashgaur2526@gmail.com" 
//                                     className="text-muted-foreground hover:text-primary transition-colors">
//                                         akashgaur2526@gmail.com
//                                     </a>
//                                 </div>
//                             </div>
//                             <div className="flex items-start space-x-4">
//                                 <div className="p-3 rounded-full bg-primary/10">
//                                     <Phone className="w-6 h-6 text-primary"/>
//                                 </div>
//                                 <div className="text-start">
//                                     <h4 className="font-medium"> Phone</h4>
//                                     <a 
//                                     href="tel:+919667372192" 
//                                     className="text-muted-foreground hover:text-primary transition-colors">
//                                          +91-9667372192
//                                     </a>
//                                 </div>
//                             </div>
//                             <div className="flex items-start space-x-4">
//                                 <div className="p-3 rounded-full bg-primary/10">
//                                     <MapPin className="w-6 h-6 text-primary"/>
//                                 </div>
//                                 <div className="text-start">
//                                     <h4 className="font-medium"> Location</h4>
//                                     <a className="text-muted-foreground hover:text-primary transition-colors">
//                                         Greater Noida, India
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="pt-8">
//                             <h4 className="font-medium mb-4">Connect With Me</h4>
//                             <div className="flex space-x-4 justify-center">
//                                 <a href="https://www.linkedin.com/in/akash-gaur-295936227/" target="_blank">
//                                     <Linkedin />
//                                 </a>
//                                 <a href="https://github.com/Gaur2526" target="_blank">
//                                     <Github />
//                                 </a>
//                                 <a href="https://www.instagram.com/akash_gaurx/" target="_blank">
//                                     <Instagram />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
//                         <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
//                         <form className="space-y-6">

//                             <div>
//                                 <label 
//                                     htmlFor="name" 
//                                     className="block text-sm font-medium mb-2"
//                                 > 
//                                     Your Name
                                    
//                                 </label>
//                                 <input 
//                                 type="text" 
//                                 id="name" 
//                                 name="name" 
//                                 required
//                                 className="w-full px-4 py-3 rounded-md border border-input bg-background  focus:outline-hidden focus:ring-2 focus:ring-primary"
//                                 placeholder="John"
//                                 />
//                             </div>
//                             <div>
//                                 <label 
//                                     htmlFor="email" 
//                                     className="block text-sm font-medium mb-2"
//                                 > 
//                                     Your Email
                                    
//                                 </label>

//                                 <input 
//                                 type="email" 
//                                 id="email" 
//                                 name="email" 
//                                 required
//                                 className="w-full px-4 py-3 rounded-md border border-input bg-background  focus:outline-hidden focus:ring-2 focus:ring-primary"
//                                 placeholder="John@gmail.com"
//                                 />
//                             </div>
//                             <div>
//                                 <label 
//                                     htmlFor="message" 
//                                     className="block text-sm font-medium mb-2"
//                                 > 
//                                     Your Message
                                    
//                                 </label>
//                                 <textarea
//                                 id="message" 
//                                 name="message" 
//                                 required
//                                 className="w-full px-4 py-3 rounded-md border border-input bg-background  focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
//                                 placeholder="Message..."
//                                 />
//                             </div>

//                             <button 
//                             typeof="submit" 
//                             disabled = {isSubmitting}
//                             className={cn(
//                                 "cosmic-button w-full flex items-center justify-center gap-2",
                                
//                             )}>
//                                 {isSubmitting ? "Sending" : "Send Message"}
//                                 <Send size={16}/>

//                             </button>

//                         </form>

//                     </div>
//                 </div>
//             </div>

//         </section>
//     )

// }

import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import emailjs from 'emailjs-com';
import { useToast } from '../hooks/use-toast'; // If you are using a custom toast hook

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Grab the form element
    const form = e.target;

    // Send the form data to EmailJS
    emailjs
      .sendForm('service_aauz6jk', 'template_c3ew8k5', form, 'vG5E8_Wj3mGYEEVIW')
      .then(
        (result) => {
          console.log(result.text);
          toast({
            title: 'Message sent!',
            description: 'Thank you for your message. I\'ll get back to you soon.',
          });
          form.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.error(error.text);
          toast({
            title: 'Error',
            description: 'Something went wrong. Please try again later.',
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="text-start">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:ramanbhagat491@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ramanbhagat491@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="text-start">
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+917006930442"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91-7006930442
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="text-start">
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Greater Noida, India
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/raman-kumar-9a55221aa/" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://github.com/Raman0101" target="_blank">
                  <Github />
                </a>
                <a href="https://www.instagram.com/kaladi_kulcha_/" target="_blank">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="John@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-secondary"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
