import './home_style_sheet.css'

export function Chat(){
    return(
        <>
        <div className=' chat grid-container'>
            <div className='flex-container friend-information'>
                <div className='icon'>User Icon</div>
                <div>
                    <div>User Name</div>
                    <div>Online</div>
                </div>
            </div>
            <div>
                Inbox
            </div>
            <div>
                <input type='text' className='type-section'/>
            </div>
        </div>
        </>
    )
}
export function Friend(){
    return(
        <>
        <div className='friend flex-container'>
                <div className='icon'>user icon</div>
                <div>User Name</div>
        </div>
        </>
    )
}

export function FriendList(){
    return(
        <>
        <div className='contacts flex-container'>
            <Friend/>
            <Friend/>
            <Friend/>
            <Friend/>
            <Friend/>
            <Friend/>
            <Friend/>
        </div>
        </>
    )
}
export function Contacts(){
    return(
        <>
        <div className='contacts-menu flex-container'>
            
            <input type='text' className='search-bar'placeholder='Search'/>
            <FriendList/>
        </div>
        </>
    )
}

export function Menu(){
    return(
        <>
         <div className='menu elements-centrelized flex-container'>
            <div className='icon elements-centrelized'>User icon</div>
            <div className='icon elements-centrelized'>Chat Icon</div>
            <div className='icon elements-centrelized'> Setting Icon</div>
            <div className='icon elements-centrelized'>Loggout Icon</div>
         </div>
        </>
    )
}

export default function Home(){
    return(
        <>
        <div className='elements-centrelized flex-container app'>
            <Menu/>
            <Contacts/>
            <Chat/>
        </div>
        </>
    )
}
