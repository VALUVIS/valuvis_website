import React from 'react';
import Image from 'next/image';

type ImageType = {
    url: string;
    big: string;
    medium: string;
    thumb: string;
    tags: null | string;
    is_floorplan: boolean;
    is_private: boolean;
};

type ModalProps = {
    onClose: () => void;
    images: ImageType[];
    currentImageIndex: number;
    setCurrentImageIndex: (index: number) => void;
}

const ImageGalleryModal: React.FC<ModalProps> = ({ onClose, images, currentImageIndex, setCurrentImageIndex }) => {
    const stopPropagation = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className="fixed z-10 inset-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-center justify-center min-h-screen text-center sm:block" onClick={onClose}>
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div 
                    className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-2xl sm:w-full max-h-[95vh] overflow-auto"
                    onClick={stopPropagation}
                >
                    <button type="button" title='Schließen' onClick={onClose} className="absolute top-0 right-0 p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <div className="mt-2 flex items-center gap-4">
                                <button title="Vorheriges" onClick={() => setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <Image
                                    src={images[currentImageIndex].url}
                                    alt="Current image"
                                    width={500} 
                                    height={500}
                                    layout='responsive'
                                    className="object-contain max-h-[70vh]"
                                />
                                <button title="Nächstes" onClick={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-4 flex justify-center overflow-x-auto scrollbar-hide">
                                {images.map((image, index) => (
                                    <Image
                                        key={index}
                                        src={image.url}
                                        alt={`Thumbnail ${index}`}
                                        width={50}
                                        height={100}
                                        layout='fixed'
                                        className={`cursor-pointer ${currentImageIndex === index ? 'border-2 border-blue-500' : ''}`}
                                        onClick={() => setCurrentImageIndex(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageGalleryModal;
