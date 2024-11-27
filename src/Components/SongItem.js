import React from 'react'
import { Icon } from 'Icons'
import { NavLink } from 'react-router-dom'
import { setCurrent } from 'stores/player'
import { useDispatch, useSelector } from 'react-redux'

const SongItem = ({ item }) => {

    const dispatch = useDispatch();
    const {current,playing,controls} = useSelector(state=>state.player);

    const isCurrentItem = (current?.id === item.id&&playing);

    const imgaeStyle =(item)=>{
        switch (item.type){
          case "artist":
            return "rounded-full";
          case "podcast":
            return "rounded-xl";
          default:
            return "rounded";
        }
      }

      const updateCurrent = () =>{
        if(current.id===item.id){
            if(playing){
                controls.pause()
            }else{
                controls.play();
            }
        }

            dispatch(setCurrent(item));

        }

    return (
        <NavLink to={"/"} key={item.id} className={"bg-footer p-4 group rounded hover:bg-active"}>
            <div className={"pt-[100%] relative mb-4"}>
                <img src={item.image} className={`absolute inset-0 object-cover  w-full h-full ${imgaeStyle(item)}`} />
                <button 
                onClick={updateCurrent}
                className={`h-10 w-10 absolute rounded-full bg-primary bottom-2 right-2 group-hover:flex group-focus:flex items-center justify-center ${!isCurrentItem?"hidden":" flex"}`}>
                    <Icon name={isCurrentItem ?"pause":"play"} size={16} />
                </button>
            </div>
            <h6 className={"oweflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold"}>
                {item.title}
            </h6>
            <p className='line-clamp-2 text-link text-sm mt-1'>
                {item.description}
            </p>
        </NavLink>
    )
}

export default SongItem