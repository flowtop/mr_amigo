import mrAmigoImg from "./media/mr_amigo.jpg";
import React from "react";

import './styles/index.css';

import NewAmigo from "./pages/NewAmigo";
import MyAmigos from "./pages/MyAmigos";
import AMGWallet from "./pages/AMGWallet";


function App() {

	let [tabNum, setTabNum] = React.useState(1);

	return (
		<div className="app">

			<header className="header">
				<div className="container header__inner">
					<div className="header__logo">
						Mr. Amigo
					</div>
					<div className="header__connect_wallet">
						Connect Wallet
					</div>
				</div>
			</header>

			<main>
				{
					tabNum == 1 &&
					<NewAmigo />
				}
				{
					tabNum == 2 &&
					<MyAmigos />
				}
				{
					tabNum == 3 &&
					<AMGWallet />
				}
			</main>

			<nav className="nav">
				<div className="container nav__inner">
					<ul>
						<li className={tabNum == 1 ? 'active' : ''} onClick={() => {
							setTabNum(1)
						}}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
								<path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
							</svg>
							New Amigo
						</li>
						<li className={tabNum == 2 ? 'active' : ''} onClick={() => {
							setTabNum(2)
						}}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
								<path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5l0 1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3l0-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/>
							</svg>
							My Amigos
						</li>
						<li className={tabNum == 3 ? 'active' : ''} onClick={() => {
							setTabNum(3)
						}}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
								<path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
							</svg>
							AMG Wallet
						</li>
					</ul>
				</div>
			</nav>

		</div>
	);
}

export default App;
