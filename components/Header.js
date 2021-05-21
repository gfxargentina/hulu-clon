import Image from "next/image";
import { HeaderItem } from "./HeaderItem";
import { 
    HomeIcon,
    LightningBoltIcon,
    BadgeCheckIcon,
    CollectionIcon,
    SearchIcon,
    UserIcon

} from '@heroicons/react/outline'

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="HOME" Icon={HomeIcon} />
                <HeaderItem title="TENDENCIAS" Icon={LightningBoltIcon} />
                <HeaderItem title="VERIFICADO" Icon={BadgeCheckIcon} />
                <HeaderItem title="COLLECCIONES" Icon={CollectionIcon} />
                <HeaderItem title="BUSCAR" Icon={SearchIcon} />
                <HeaderItem title="CUENTA" Icon={UserIcon} />               
            </div>

            <Image src="https://links.papareact.com/ua6" width={200} height={100} />           
        </header>
    )
}

export default Header
