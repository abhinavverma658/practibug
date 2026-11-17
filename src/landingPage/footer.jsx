const Footer = () => {
    return (  
        <footer className="bg-gray-800 text-white py-4">    
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto px-4">
            <div className="mb-4 sm:mb-0">
                <p className="text-sm">&copy; {new Date().getFullYear()} Practibug. All rights reserved.</p>
            </div>
            <div className="flex space-x-4 text-sm ">
               <p>Made with ❤️ | By <span className="font-bold">Abhinav Verma</span></p>
            </div>

        </div>
        </footer>

    );
};
export default Footer;