import Link from "next/link";

const Navigation = (): JSX.Element => {
    return (
        <>
            <nav>
                <ul className="flex">
                    <li>
                        <Link href="/test">
                            test
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
};

export default Navigation;
