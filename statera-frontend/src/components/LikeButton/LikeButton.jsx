const buttonVariants = {
    liked: {
        button: "flex h-min w-min space-x-1 items-center rounded-full text-wine bg-rose-50 py-1 px-2",
    },
    unliked: {
        button: "flex h-min w-min space-x-1 items-center rounded-full text-gray-600 bg-gray-100 py-1 px-2 hover:text-rose-600 hover:bg-rose-50"
    }
}

const LikeButton = (props) => {
    return (
        //!TODO: Define button action
        <button onClick={props.action} className={"transition ease-in-out delay-100 hover:scale-110 duration-100"}>
            <div className="cursor-pointer">
                <span className={props.isFavorite ? buttonVariants.liked.button : buttonVariants.unliked.button}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                  <p className="font-extrabold font-manrope text-sm">{props.likes}</p>
                </span>
            </div>
        </button>
    )
}

export default LikeButton;