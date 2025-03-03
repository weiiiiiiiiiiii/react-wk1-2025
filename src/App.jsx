import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="guide">
        <h4>
          <a href="">首頁</a>
          /
          <a href="./vc.html">聲優專區</a>
          / 梶裕貴
        </h4>
      </div>
      <article>
        <div className="va-information">
          <div className="actor">
            <img src="/image/梶裕貴/梶裕貴.jpg" alt="" className="actor-img" width="250px" height="250px" />
          </div>

          <div className="introduction">
            <div className="introduction-content">
              <div id="introduction-content">
                <div id="introduction-content-1">
                  <h1 id="xinyan">梶裕貴 かじ ゆうき</h1>
                  <h2 id="xinyan-i">1985年9月3日<br />
                    所屬: VIMS <br />
                    出生: 日本東京都<br/>
                    配偶: 竹達彩奈<br/>
                    活動時期: 2004至今</h2>
                </div>
                <div id="introduction-content-2">
                  <h2>著名配音角色: <br />
                    轟焦凍 <br />
                    孤爪研磨<br />
                    艾連·葉卡<br />
                    雷恩·艾姆茲<br />
                  </h2>
                </div>
              </div>


            </div>
          </div>
        </div>
        <div className="experience">
          <h1>生平經歷</h1>
          <hr />
          <div className="va-debut ">
            <h2 id="va-debut" className="in-bgc">出道作</h2>
            <h2 className="content">PSP遊戲『帝國千戰記』的彰欄一角<br />
              動畫『不可思議星球的雙胞胎公主』的社員C。<br />
              動畫『鐵馬少年』主角: 篠崎命。</h2>
          </div>

          <div className="va-introduction">
            <h2 id="va-introduction" className="in-bgc">簡介</h2>
            <h2 className="content">喜歡旅行，擁有普通汽車駕照<br />
              敬仰的聲優有山寺宏一和林原惠<br />
              認為AI合成聲音很可怕，但仍在推進自己擁有權利的聲音合成軟體的開發<br />
              在黑執事（菲尼安）的演出受到矚目<br />
              2008，與下野紘一起擔任雙主持人，開始了廣播『下野紘&梶裕貴的Radio Misty』<br />
              2011，與羽多野涉共同演出首部真人電影『神☆音物語』主角: 白池悠宙</h2>
          </div>

          <div className="va-winning">
            <h2 id="va-winning" className="in-bgc">得獎/事蹟</h2>
            <h2 className="content">2009 第3屆聲優獎－新人男聲優賞<br />
              2013 第7屆聲優獎－主演男聲優賞、第12回獲得東京動畫獎 聲優獎<br />
              2014 第8屆聲優獎－主演男聲優賞<br />
              2012/2/22 推出第一張專輯「sense of wonder」<br />
              2012/4/18 Fami通男性角色聲音聲優賞<br />
              2012/9/5 發售第二張專輯「Hello !」<br />
              2018 出版自己的著作《總有一天一切都會成為你的力量》<br />
              2020 創立原創服裝品牌「en.365」<br />
              2022/9/3 與荒木哲郎、澤野弘之組成團體「Otoboké projéct」製作原創動畫</h2>
          </div>
        </div>
        <div className="role">
          <h1>配音角色</h1>
          <hr />
          <div className="role-card">
            <div className="card">
              <div className="card-img">
                <a href=""><img src="../public/image/梶裕貴/艾連·葉卡.png" alt="艾連·葉卡" /></a>
              </div>
              <div className="card-text">
                <h2>艾連·葉卡</h2>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <a href="./volley.html"><img src="../public/image/梶裕貴/孤爪研磨.png" alt="孤爪研磨" /></a>
              </div>
              <div className="card-text">
                <h2>孤爪研磨</h2>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <a href="./myhero.html"><img src="../public/image/梶裕貴/轟焦凍.png" alt="轟焦凍" /></a>
              </div>
              <div className="card-text">
                <h2>轟焦凍</h2>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <a href=""><img src="../public/image/梶裕貴/梅里奧達斯.png" alt="梅里奧達斯" /></a>
              </div>
              <div className="card-text">
                <h2>梅里奧達斯</h2>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <a href=""><img src="../public/image/梶裕貴/錆兔.png" alt="錆兔" /></a>
              </div>
              <div className="card-text">
                <h2>錆兔</h2>
              </div>
            </div>
          </div>

          <div className="role-card">
            <div className="card">
              <div className="card-img">
                <a href=""><img src="../public/image/梶裕貴/雷恩·艾姆茲.png" alt="雷恩·艾姆茲" /></a>
              </div>
              <div className="card-text">
                <h2>雷恩·艾姆茲</h2>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <a href=""><img src="../public/image/梶裕貴/櫻滿集.png" alt="櫻滿集" /></a>
              </div>
              <div className="card-text">
                <h2>櫻滿集</h2>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <a href=""><img src="../public/image/梶裕貴/里見蓮太郎.png" alt="里見蓮太郎" /></a>
              </div>
              <div className="card-text">
                <h2>里見蓮太郎</h2>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <a href=""><img src="../public/image/梶裕貴/菲尼安.png" alt="菲尼安" /></a>
              </div>
              <div className="card-text">
                <h2>菲尼安</h2>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <a href=""><img src="../public/image/梶裕貴/舞子集.png" alt="舞子集" /></a>
              </div>
              <div className="card-text">
                <h2>舞子集</h2>
              </div>
            </div>
          </div>

          <div className="role-card">
            <div className="card">
              <div className="card-img">
                <a href=""><img src="../public/image/梶裕貴/遊馬崎沃克.png" alt="遊馬崎沃克" /></a>
              </div>
              <div className="card-text">
                <h2>遊馬崎沃克</h2>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <a href=""><img src="../public/image/梶裕貴/不動明王.png" alt="不動明王" /></a>
              </div>
              <div className="card-text">
                <h2>不動明王</h2>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <a href=""><img src="../public/image/梶裕貴/有田春雪.png" alt="有田春雪" /></a>
              </div>
              <div className="card-text">
                <h2>有田春雪</h2>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <a href=""><img src="../public/image/梶裕貴/雪音.png" alt="雪音" /></a>
              </div>
              <div className="card-text">
                <h2>雪音</h2>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <a href=""><img src="../public/image/梶裕貴/篠崎命.png" alt="篠崎命" /></a>
              </div>
              <div className="card-text">
                <h2>篠崎命</h2>
              </div>
            </div>
          </div>

          <div className="role-card">
            <div className="card">
              <div className="card-img">
                <a href=""><img src="../public/image/梶裕貴/二藤尚哉.png" alt="二藤尚哉" /></a>
              </div>
              <div className="card-text">
                <h2>二藤尚哉</h2>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <a href=""><img src="../public/image/梶裕貴/山田太郎.png" alt="山田太郎" /></a>
              </div>
              <div className="card-text">
                <h2>山田太郎</h2>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <a href=""><img src="../public/image/梶裕貴/希特隆.png" alt="希特隆" /></a>
              </div>
              <div className="card-text">
                <h2>希特隆</h2>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <a href=""><img src="../public/image/梶裕貴/慎導灼.png" alt="慎導灼" /></a>
              </div>
              <div className="card-text">
                <h2>慎導灼</h2>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <a href=""><img src="../public/image/梶裕貴/成宮鳴.png" alt="成宮鳴" /></a>
              </div>
              <div className="card-text">
                <h2>成宮鳴</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="link">
          <h1>相關連結</h1>
          <hr />
          <div >
            <h3 id="link">
              <div className="link-connect">
                <a href="https://www.instagram.com/yuki_kaji_official/" className="connect">梶裕貴的Instagram</a>
                <a href="https://x.com/KAJI__OFFICIAL" className="connect">梶裕貴的X/Twitter</a>
                <a href="https://web.archive.org/web/20081104062029/http://blog.animate.tv/bratama/" className="connect">梶裕貴・代永翼公式部落格</a>
              </div>
              <div className="link-connect">
                <a href="https://www.youtube.com/channel/UCx2XAGS0FoG9S6r0bhNo2UA" className="connect">梶裕貴的Youtube</a>
                <a href="https://space.bilibili.com/1425596046" className="connect">梶裕貴的Bilibili個人空間</a>
                <a href="https://gree.jp/kaji_yuki" className="connect">梶裕貴 公式BLOG「GREE」</a>
              </div>
            </h3>
          </div>
        </div>
      </article>
    </>
  )
}

export default App
