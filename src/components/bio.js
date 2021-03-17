import React from 'react';
import './_img.scss';

const Bio = () => (
    <>
        <div class="py-24 bg-white">
            <div class="max-w-screen-md mx-auto">

                <div class="p-5">

                    <div class="grid grid-cols-1 sm:grid-cols-12">
                        <div class="sm:col-span-3 flex flex-col items-between">

                            <div class="img__cropper">
                                <img class="w-32 h-32 rounded-full sm:mr-10" src="http://codenawis.com/wp-content/uploads/2020/08/images.jpg" alt="Avatar of Jonathan Reinink" />
                            </div>

                            <div class="text-sm mt-5">
                                <a href="#" class="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">Taimoor Sattar</a>
                                <p>Blogger and Youtuber</p>
                            </div>
                        </div>
                        <div class="sm:col-span-9 text-left sm:flex flex-col justify-between py-6">

                            <p class="mt-2 text-base leading-6">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
                            <div class="flex items-center text-indigo-600 text-xs uppercase">
                                <a href="#" class="mr-2">Youtube</a>
                                <a href="#" class="mr-2">Medium</a>
                                <a href="#" class="mr-2">Twitter</a>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>




    </>
);

export default Bio;
