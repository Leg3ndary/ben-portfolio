export default function Footer() {
    return (
        <div className="flex justify-center w-full h-48 bg-black">
            <div className="flex w-[1170px]">
                <div className="flex flex-row flex-wrap w-full h-full">
                    <div className="flex flex-col justify-center w-full h-full p-12">
                        <h1 className="p-3 text-lg font-bold text-center text-white">
                            Thanks for Reading all of this!
                        </h1>
                        <p className="p-3 text-base text-[#777777] text-center">
                            Copyright © 2023 Ben Zhou All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
