import "./css/reset.css";
import "./css/style.css";
import Header from "./components/Header.js";

// carousel 둥

function App() {
  return (
    <div id="wrapper">
      <section>
        <Header></Header>
        <div className="title-and-info p-50">
          <div className="title">
            <img
              alt="매니페스트"
              src="https://occ-0-2794-988.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABe9SXRHeY70egO6772mSRCAukR_a6Rr7jDSLv--EDGDpyEcfxjewMMorCv4DF9XCKsRcN3U8pG6G0KrAwLEF8QzfBZLtxe9LU5Dq0p38UOJn.webp?r=6d5"
              title="매니페스트"
            />
          </div>
          <div className="info">
            <div className="info-synopsis">
              《빽 투 더 퓨쳐》의 로버트 저메키스가 총괄 프로듀서를 맡은 앙상블
              시리즈. 《Common Sense Media》에서 '탄탄한 초자연적 미스터리'
              작품으로 평가했다.
            </div>
          </div>
          <div className="button-wrapper">
            <a href="/watch.html">
              <button type="button">
                <div className="play-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <span>재생</span>
              </button>
            </a>
            <button type="button">
              <div className="detail-info-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <span>상세 정보</span>
            </button>
          </div>
        </div>
        <div id="image-wrapper">
          <img
            src="https://occ-0-2794-988.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcPs0KNVkOJ2dz3xX-xQt1Ms1QycQfT2Je6bLlXOIdKs_7_rk4X6v0Nn6JwSejEopKSxanlRMIQ-RUrMdHUBNUHBJE_sNDUNoYOb.webp?r=642"
            alt=""
          />
          <div className="rating">
            <svg viewBox="0 0 100 100">
              <path
                fill="#CD6D34"
                d="M88.727 100H11.27C5.05 100 0 94.952 0 88.727V11.273C0 5.047 5.05 0 11.27 0h77.457C94.952 0 100 5.047 100 11.273v77.454C100 94.952 94.952 100 88.727 100"
              ></path>
              <path
                fill="#FFFFFE"
                d="M36.876 15.482v68.651H21.509v-49.51h-5.484l7.097-19.141h13.754zm45.46 0V28.87H57.175v10.063h24.08c.845 0 1.533.687 1.533 1.534v42.13c0 .845-.688 1.532-1.534 1.532H43.616a1.533 1.533 0 01-1.533-1.533V62.202H57v8.988h10.874V52.052h-25.79v-36.57h40.254z"
              ></path>
            </svg>
          </div>
        </div>
      </section>
      <div className="contents-lists-and-footer">
        <section className="contents-lists p-50">
          <div className="row">
            <h3>내가 찜한 콘텐츠</h3>
            <div className="list">
              <div className="carousel_container">
                <div className="container">
                  <ul>
                    <li>
                      <div className="card">
                        <a href="/watch.html">
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaFIX6w1AsUnr7ZC-LdKw4qgxToibOhMeN6LNkupQndpvla2ofB7TajOUYFt_VruYQ4aAuKb3vgloSO1OkjZNpBoUx1CYwdVIFLolkwubwyH987xqSgFWN5Ashr4frVgl7fI.jpg?r=aca"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="card">
                        <a href="/watch.html">
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbhthOyceMFXRmX1YOpLVhVepRjD3_ugoQuDKsCRncaRmuBr6-8Z5pJ6VWuuBsiEYeWDUfk45D2jFNujDbz-qSWTG3fvKBoXxeAZsuBStkvXRyy7ZaBZP5N2fQcpcO5WNN7ijyZttT3oDfqweoPQ3082Rt1k_z0JM6-7zg.jpg?r=ffd"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="card">
                        <a href="/watch.html">
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbKRFQURxJptj7hydFGnhvKFPe-5EjS3-fhesCeKmP448gTSfi4t3OzxM1GdFhc83ib_t1FgB_3xZKhcwE0LslJtnK_dnpauqSziRlFPhO5diWqm874AoCw1lO06Ot2L9pyV.jpg?r=be1"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="card">
                        <a href="/watch.html">
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf2atV8BKJEOqunG6UlrOGeinuYVqwqfACtfs5yVRUJJ7SEmC_alTKmez2lBYW5DlpEUfPbqJ0jdWtfHOIkTxmV_-Gi2C92DQDLY0Gj_9Pf-fRgyjc-C3nIKoljfqZVeAEA4.jpg?r=520"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="card">
                        <a href="/watch.html">
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS2yYgs51aqPo0sKEGzIMHsyN-qAu14cQo88rJLujvvdteZY0ug-ykKqLhLN1JW_zjDF7_8jyBWP5PS63sK26zZbgMJBFW_5_4g.webp?r=f6b"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="card">
                        <a href="/watch.html">
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXYl6CW3yZE--51ByXZwbTwGfBqvpnLCa2C5x9CKkxVY1OxN8xMYhqTmGZ6S_5URb9qkE5JoPX3xpGT8TIPH0QPeQYgXiZAMHsU.webp?r=f77"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="card">
                        <a href="/watch.html">
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfUzP59y_7oi1j1EUjNQPIxYZbT_2kP27uqdxj3KTXfC-HL33fOhucviPondxWVSrsqsQjvv5DPK1_hufCKlkNM1SyccBlfprtP2u4S9AboNa0SRYzH7F-V0n4iWU9DVtVx_.jpg?r=d28"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="card">
                        <a href="/watch.html">
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd3Rb2keBqNB-crnYv6BuqRYbJ7cJBDjv2gEFjHbF5vjKjnXZaoTd6wKnhN56DmmLhVLFHx6TCGjC9nOHQmjAtcLeR9yrqK3fKA.webp?r=d20"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="card">
                        <a href="/watch.html">
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf21-sky93UTkpfIu1SXYk3g6smhBlbTrEL3m51-aKzJMdHGqk9Bqjr4d3lqlwt-LfxfOl0McbRF2rT8yPyXMSXLbV8T3inD0Uk.webp?r=a1c"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="card">
                        <a href="/watch.html">
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY-NLxJl5X1IY-Pi0BuBVFNqWKKsCC-9zRAdrxFxM0S6AUXQqfP75HM5YnYm0HlgTTzgI-fXoxLsuGnSUg9n1o2o-HKQhymprIo.webp?r=53c"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <button className="arrow-prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
                </svg>
              </button>

              <button className="arrow-next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="row">
            <h3>넷플릭스 인기 콘텐츠</h3>
            <div className="list">
              <div className="carousel_container">
                <div className="container">
                  <ul>
                    <li>
                      <div className="card">
                        <a href="/watch.html">
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfeVfO5gAUDeqoqObHSforfnPzC2JfonpiTvQ9EC-Hz2BL-gc3nPU8hbCEjYPi5oOlgMG45yqr6O_2W6gpX4NJEq571LB2ULhb-nw3C3m23wKCcq4WXXcIsQxadSCQL_1weUnYrTcUwOOdJ0X-BjyezKXYUUil8LL5y-Uwqrk8tn-d9-uo2pRpmfi0tHTVI-xj6f.webp?r=54c"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="card">
                        <a href="/watch.html">
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdUY2aktoXodYbhA61ChrZXBelpMjR48xYI4Ck1_vJ4N9BdwnXX_HhkUZe8x-Fq0sn7Nw-cpFIaghA_7KuZEijO1T8c43QHoGCRQf2RqMbis5-_HhXl_o1rDOIDBhsKj9f6UOse9Va5RR49Nt7cIgPvi75A5yLNYgPr44Gn_CZaKBJM4MmTT1Cwqm_SBQSbUcwqoFKxya7OAZlwp1VTb6hJbeOPLZloH.jpg?r=169"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="card">
                        <a href="/watch.html">
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQppu8TL1VD3W36oexh2C1DmptZNPW-4bNlxEBM71bJZ5yO3fFMFcAJrPzxUAxtfTXvMfsofmR56vugm2-055192eX7VQ3gTUWxa-qH9pfh-7YaBqvaZoP1jdBFIaAfIjMBK.jpg?r=094"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="card">
                        <a href="/watch.html">
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZvOPuOzKSLpQZpIqBW7atUlfT_vjFnoiYvlrA0fEkJvBw7ZFJIxcPPDjvSvLJBx3K90ivkgIP0gX6VlLAXPdeTooB89Ycz4ANASY_Heh_hLkK67KbuZ8mSEd2vv55IBL68h.jpg?r=f28"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="card">
                        <a href="/watch.html">
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUXCrBV7pX_0xdE8JPmTIuNxwrLtVy47R0Xq2wFYXjMKtWR17YzK5_Mk-v5Zeioir7_69P6LwBRJ8mkYPr9hM2taXkMDDahGcabBP-5BuugNzY-vLsiBioBInKc9ffczhv4V2VgDcXN0smKoUERLYc_9rvwWWKX5P7cfxhK4yDmM9CDUi4Retyr0r7MLL20.jpg?r=dd5"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <button className="arrow-prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
                </svg>
              </button>

              <button className="arrow-next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="row">
            <h3>오늘 대한민국의 TOP 10 시리즈</h3>
            <div className="list">
              <div className="carousel_container">
                <div className="container">
                  <ul>
                    <li>
                      <div className="boxart">
                        <a href="/watch.html">
                          <div>
                            <svg
                              id="rank-1"
                              width="100%"
                              height="100%"
                              viewBox="-20 0 70 154"
                              className="svg-icon svg-icon-rank-1 top-10-rank"
                            >
                              <path
                                stroke="#595959"
                                strokeLinejoin="square"
                                strokeWidth="4"
                                d="M35.377 152H72V2.538L2 19.362v30.341l33.377-8.459V152z"
                              ></path>
                            </svg>
                          </div>
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABeEd5IAk1G-UKk6SkHP3zo3MwhX5loIoaKL_qw9OWUOXKaRJHnS_--kKXFMFK4tpAmyc_CaSwytYbQxPLOMjBZRWNnzS1qnqEt4pSBuhOwpmMEf6pI5oFuVcqTAtgYjmWSF0cMuqdP21_IR-CUDdsg.webp?r=617"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="boxart">
                        <a href="/watch.html">
                          <div>
                            <svg
                              id="rank-2"
                              width="100%"
                              height="100%"
                              viewBox="0 0 80 154"
                              className="svg-icon svg-icon-rank-2 top-10-rank"
                            >
                              <path
                                stroke="#595959"
                                strokeLinejoin="square"
                                strokeWidth="4"
                                d="M3.72 152H113v-30.174H50.484l4.355-3.55 29.453-24.012c5.088-4.124 9.748-8.459 13.983-13.004 4.16-4.464 7.481-9.339 9.972-14.629 2.449-5.203 3.678-11.113 3.678-17.749 0-9.428-2.294-17.627-6.875-24.645-4.597-7.042-10.941-12.494-19.07-16.376C77.803 3.957 68.496 2 58.036 2 47.591 2 38.37 4.023 30.347 8.06c-8.015 4.032-14.457 9.578-19.352 16.654-4.492 6.493-7.389 13.803-8.693 21.952h34.055c1.236-3.52 3.398-6.52 6.459-8.97 3.54-2.834 8.277-4.224 14.147-4.224 5.93 0 10.552 1.537 13.76 4.681 3.181 3.12 4.791 7.024 4.791 11.594 0 4.151-1.16 7.934-3.468 11.298-2.192 3.194-5.987 7.124-11.405 11.84L3.72 122.465V152z"
                              ></path>
                            </svg>
                          </div>
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbfGuVuV9v2CeW5xp6ETW6HEf2hlwiUqtWp6TCMDl7FFNowdho3lkhToIN5WjLvgravPg1RzVBLvl_0NrenZM5fFTU8Qmt9HDFa7mzntosLEn5rFM5g5WFljvpUC5elATEwYeQ.jpg?r=9d9"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="boxart">
                        <a href="/watch.html">
                          <div>
                            <svg
                              id="rank-3"
                              width="100%"
                              height="100%"
                              viewBox="0 0 80 154"
                              className="svg-icon svg-icon-rank-3 top-10-rank"
                            >
                              <path
                                stroke="#595959"
                                strokeLinejoin="square"
                                strokeWidth="4"
                                d="M3.809 41.577h33.243c1.3-2.702 3.545-4.947 6.674-6.72 3.554-2.015 7.83-3.01 12.798-3.01 5.555 0 10.14 1.11 13.723 3.376 3.839 2.427 5.782 6.283 5.782 11.315 0 4.553-1.853 8.395-5.473 11.38-3.547 2.926-8.18 4.37-13.821 4.37H41.44v28.366h16.77c5.572 0 10.275 1.227 14.068 3.711 4.02 2.633 6.071 6.581 6.071 11.616 0 5.705-1.943 9.975-5.853 12.562-3.658 2.42-8.292 3.61-13.863 3.61-5.205 0-9.82-.94-13.827-2.836-3.698-1.75-6.32-4.272-7.785-7.529H2.33c2.096 12.089 7.761 21.65 17.028 28.78C29.242 148.175 42.594 152 59.476 152c10.706 0 20.175-1.783 28.42-5.337 8.185-3.528 14.575-8.486 19.208-14.884 4.595-6.346 6.896-13.938 6.896-22.837 0-6.952-1.93-13.494-5.81-19.666-3.815-6.07-9.68-10.367-17.683-12.908l-5.46-1.735 5.353-2.04c6.659-2.538 11.667-6.338 15.083-11.412 3.431-5.096 5.142-10.806 5.142-17.181 0-8.471-2.262-15.778-6.787-21.985-4.574-6.275-10.7-11.17-18.408-14.696C77.683 3.775 69.109 2 59.687 2 44.084 2 31.515 5.816 21.91 13.415c-9 7.119-15.025 16.486-18.101 28.162z"
                              ></path>
                            </svg>
                          </div>
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABR17KCvW5vqQv5HKM-B8eWB_WC0qa7HRJ1GaGwzWsxa2PquX8Th2J9pjWMRWD5VIXABNkdOvQQeRwXcZD8beryN9Vw7JUYJEIGi-zBnjbk-bz8WA_RzlRVjI8fel_yAsxXQJ6_EjF9fCRRRq661M6Q.webp?r=795"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="boxart">
                        <a href="/watch.html">
                          <div>
                            <svg
                              id="rank-4"
                              width="100%"
                              height="100%"
                              viewBox="0 0 81 154"
                              className="svg-icon svg-icon-rank-4 top-10-rank"
                            >
                              <path
                                stroke="#595959"
                                strokeLinejoin="square"
                                strokeWidth="4"
                                d="M72 152h35.333v-30.977H128V92.497h-20.667V2H69.89L2 92.712v28.311h70V152zM36.202 92.188l35.93-47.998v47.998h-35.93z"
                              ></path>
                            </svg>
                          </div>

                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABY7nKzXAPEyadyT4U07OR0uduJUSWZWD_FfH0I-dnFAGOyVyYUTSb5Wk5rA0wtf5nDLx7sUP_-P57csneTA2MLYxmjr8Le5w-ol6GLLD5UDCIUusxBW1jvuHwmGq1VobglrhZZrTpWkM7u_beSjDUg.webp?r=cf3"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="boxart">
                        <a href="/watch.html">
                          <div>
                            <svg
                              id="rank-5"
                              width="100%"
                              height="100%"
                              viewBox="0 0 81 154"
                              className="svg-icon svg-icon-rank-5 top-10-rank"
                            >
                              <path
                                stroke="#595959"
                                strokeLinejoin="square"
                                strokeWidth="4"
                                d="M105.588 32.174V2H13.534l-8.3 88.357h32.463c2.145-2.362 4.866-4.254 8.143-5.675 3.585-1.554 7.543-2.328 11.859-2.328 6.247 0 11.418 1.745 15.418 5.255 4.061 3.564 6.104 8.37 6.104 14.265 0 6.041-2.044 10.89-6.121 14.387-3.999 3.43-9.162 5.132-15.401 5.132-4.299 0-8.17-.694-11.601-2.095-3.11-1.268-5.577-2.946-7.368-5.042H2.592c3.308 11.593 9.782 20.623 19.46 27.164C32.472 148.464 45.64 152 61.602 152c10.12 0 19.294-1.99 27.548-5.966 8.198-3.949 14.711-9.718 19.572-17.335 4.844-7.59 7.278-16.95 7.278-28.123 0-9.182-2.013-17.314-6.032-24.431-4.02-7.118-9.514-12.7-16.51-16.775-6.99-4.072-14.849-6.109-23.612-6.109-11.06 0-20.099 3.483-27.234 10.461l-3.892 3.806 3.273-35.354h63.595z"
                              ></path>
                            </svg>
                          </div>
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABTmr5WhOCUzUZvEy99WOdzvHai1qPht9TKkHd2eVPBbPUPI0RsrUmwUJU2XLT1420gdcqgbiwMpZA2VJpVi7CFXwj43lHEb5xt7xKSXb-l61t0OWScTpZ2iS0jDVJlyaGZvhvCZ-oug.webp?r=b0f"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <button className="arrow-prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
                </svg>
              </button>

              <button className="arrow-next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="row">
            <h3>오직 넷플릭스에서</h3>
            <div className="list">
              <div className="carousel_container">
                <div className="container">
                  <ul>
                    <li>
                      <div className="card">
                        <a href="/watch.html">
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXrvnwg7RT3DrYjLLW6j3oItc0w4UM4j1yfk1CI9JlqSIiMUtYyUrCcsLM_Z8YUW-sOH8DEIhTtRk9khJhCptSD7Sff_Q1Ha1Uc-uRcUBaZJzOWDdwrqkXE8mR6fc-jUqE-l.jpg?r=6c0"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="card">
                        <a href="/watch.html">
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRR3JDcWdH18bBUwKDZtxd9dTnp1Q4Z-jOvvVVenbkW-YaU9lmSon0lq8jPR-ct8bo-mGTsUyq4SEz6R1hZ6LLNrUBWbf6CIPvAlVY2rxQY_lel9HMDjNxL6lLB1n35Z_4s6.jpg?r=68a"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="card">
                        <a href="/watch.html">
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWNnZaL9Nh1mXgPkCQAbRhlYJKcRShYn2UmRlwdl_znHGTfOC8a8kTdkkNOBS0hzsS0SmEpVfpm8jiTtYMaTKZMS1IzJeo6CeH3oS0J0Xq-xmJHMXGyFq0upGpQQy7w_6-jA.jpg?r=4bd"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="card">
                        <a href="/watch.html">
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRuU7TNGpxbpud7mjDvNS-fYQBgMWSW3LKrPM1vEBXBvEoQYWa-MGzvABIs6YiDz-YoT9Vv4aFm7HWVaQZZRzqFtNRKqiEWYXqV0L7c4HtdGnfoADwRmspjQLwUFpRi1m6M0.jpg?r=de2"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="card">
                        <a href="/watch.html">
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZJ0a5IH-NRjvb4vNlQVslkMMyjumFVLHr4lVcBAU_S2wWPjgglN4F4-a6zaOFw3-LKkZAtYHLNGbsJc5nkt1ecbmrHwDSqHbjPjrckgMszHKvzoiQmHmVoaE8C9-S8f6wup.jpg?r=3b7"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <button className="arrow-prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
                </svg>
              </button>

              <button className="arrow-next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="row">
            <h3>새로 올라온 콘텐츠</h3>
            <div className="list">
              <div className="carousel_container">
                <div className="container">
                  <ul>
                    <li>
                      <div className="card">
                        <a href="/watch.html">
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa3tPVS-KI_iBNbrOp3vy0Xc1Kd6j1VbyHklplABSCaTOiYi29fGM2c1BHkQ24VGGuvvNYSfATnrACKO8EmUjL3Tyh9pNoSoG2IqJPp0JVlR8-6tqIfQmsooj17NvJ09BKx-.jpg?r=3df"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="card">
                        <a href="/watch.html">
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbKRFQURxJptj7hydFGnhvKFPe-5EjS3-fhesCeKmP448gTSfi4t3OzxM1GdFhc83ib_t1FgB_3xZKhcwE0LslJtnK_dnpauqSziRlFPhO5diWqm874AoCw1lO06Ot2L9pyV.jpg?r=be1"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="card">
                        <a href="/watch.html">
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXctYILP8nNwkfrEmhA1r7ycYt8Gk0AFiXYcYqz4vpkh9wmVaXoVnb6IppueAioletKq3mXf5fW9PzNgEY0T2LEt5F2Pi2MhYlV4LvtlC_bA0c_ByVVIsK2ktXO7BOIGlBBX.jpg?r=0e3"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="card">
                        <a href="/watch.html">
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfvIR3_BuSKDc-LN5kvYkShFCE8AJOw0j7d37Rt2K8Z0vze_qC-F2ojDbHgElgKaH23EaCZhj7XxYxWd3Y7dC5l5imzyYhESA7M1mr1pkIqO-PrByLX4Xgfly1qWQCeC-vsrjfMtUQ.webp?r=f0b"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="card">
                        <a href="/watch.html">
                          <img
                            src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSmuJFaIHEwVl0zCmd9LTTZOxkb-rW3XUb6hNOmaLhdW3Af0A1lknyX8RAFTipOWlMhx_o9_qKGl86EvWeghsCbtrC2HLB0IXzKvoT3qHKfo4chuH0SppB6wCjgo7cEW3NYk6Mf5h0pvHGEfWGLvcuozwauYkqIhHewMSfrHDRfA0a6dMLdiT_2q41ENIyc.jpg?r=8ee"
                            alt=""
                          />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <button className="arrow-prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
                </svg>
              </button>

              <button className="arrow-next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <footer>
          <div className="social-wrapper">
            <ul>
              <li>
                <a href="">
                  <img src="" alt="" />
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-icon svg-icon-facebook-logo"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.9868 13.1621V21.9841H10.0418V13.1621H6.8418V9.51207H10.0468V6.73207C10.0468 3.56707 11.9318 1.82007 14.8148 1.82007C15.7616 1.83321 16.7061 1.91577 17.6408 2.06707V5.17307H16.0448C15.4952 5.10007 14.9422 5.28088 14.5419 5.66447C14.1415 6.04807 13.9373 6.59284 13.9868 7.14507V9.51207H17.4868L16.9278 13.1621H13.9868Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <img src="" alt="" />
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-icon svg-icon-instagram-logo"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.9302 16.1229C21.9586 17.6764 21.3791 19.1796 20.3152 20.3119C19.1853 21.3804 17.68 21.9606 16.1252 21.9269C14.4742 22.0209 9.52524 22.0209 7.87524 21.9269C6.32151 21.955 4.81816 21.3756 3.68524 20.3119C2.61778 19.1818 2.03769 17.6772 2.07024 16.1229C1.97724 14.4719 1.97724 9.52294 2.07024 7.87294C2.03979 6.3188 2.61957 4.8146 3.68524 3.68294C4.81792 2.61946 6.32187 2.04157 7.87524 2.07294C9.52624 1.97894 14.4752 1.97894 16.1252 2.07294C17.6791 2.04388 19.1828 2.62347 20.3152 3.68794C21.3827 4.81807 21.9628 6.32272 21.9302 7.87694C22.0232 9.52794 22.0232 14.4719 21.9302 16.1229ZM20.2002 11.9999C20.2002 10.5449 20.3202 7.42194 19.8002 6.10594C19.4575 5.23672 18.7695 4.54869 17.9002 4.20594C16.5882 3.68894 13.4612 3.80594 12.0062 3.80594C10.5512 3.80594 7.42824 3.68494 6.11224 4.20594C5.24322 4.54899 4.55529 5.23693 4.21224 6.10594C3.69524 7.41794 3.81224 10.5449 3.81224 11.9999C3.81224 13.4549 3.69124 16.5779 4.21224 17.8939C4.5556 18.7628 5.24343 19.4506 6.11224 19.7939C7.42424 20.3109 10.5522 20.1939 12.0062 20.1939C13.4602 20.1939 16.5842 20.3149 17.9002 19.7939C18.7693 19.4509 19.4572 18.763 19.8002 17.8939C20.3192 16.5819 20.2002 13.4549 20.2002 11.9999ZM17.1302 11.9999C17.1302 14.8311 14.8354 17.1264 12.0042 17.1269C9.17307 17.1275 6.87734 14.8331 6.87624 12.0019C6.87513 9.17077 9.16907 6.8746 12.0002 6.87293C13.361 6.87028 14.6668 7.40953 15.6292 8.37155C16.5916 9.33356 17.1314 10.6392 17.1292 11.9999H17.1302ZM15.3362 11.9999C15.3362 10.1596 13.8446 8.66749 12.0042 8.66694C10.1639 8.66639 8.67134 10.1576 8.67024 11.9979C8.66914 13.8383 10.1599 15.3313 12.0002 15.3329C13.8409 15.3318 15.333 13.8406 15.3352 11.9999H15.3362ZM17.3362 7.85895C16.6735 7.85895 16.1362 7.32168 16.1362 6.65894C16.1362 5.9962 16.6735 5.45894 17.3362 5.45894C17.999 5.45894 18.5363 5.9962 18.5363 6.65894C18.5381 6.97725 18.4127 7.28311 18.1879 7.50847C17.9631 7.73383 17.6576 7.86001 17.3392 7.85895H17.3362Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <img src="" alt="" />
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-icon svg-icon-twitter-logo"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.7679 8.20699C20.7912 11.5932 19.4564 14.8475 17.0619 17.242C14.6674 19.6365 11.4131 20.9713 8.02688 20.948C5.58911 20.9544 3.2014 20.2564 1.15088 18.938C1.50985 18.9771 1.87079 18.9955 2.23188 18.993C4.24756 18.9984 6.20627 18.3245 7.79188 17.08C5.87426 17.0472 4.18959 15.799 3.59988 13.974C3.8797 14.0187 4.16251 14.0421 4.44588 14.044C4.84342 14.0428 5.23922 13.9914 5.62388 13.891C3.53625 13.4666 2.03658 11.6303 2.03788 9.49999V9.44099C2.65823 9.78763 3.35178 9.98261 4.06188 10.01C2.08967 8.6933 1.48213 6.06953 2.67488 4.01999C4.9496 6.82015 8.30584 8.52335 11.9089 8.70599C11.8373 8.36899 11.8008 8.0255 11.7999 7.68099C11.8012 5.84293 12.9247 4.19202 14.634 3.51624C16.3433 2.84045 18.292 3.27679 19.5499 4.61699C20.552 4.4234 21.513 4.0573 22.3899 3.53499C22.0555 4.56892 21.3554 5.44537 20.4209 5.99999C21.3101 5.89964 22.1793 5.66707 22.9999 5.30999C22.3865 6.20227 21.6272 6.98488 20.7539 7.62499C20.7679 7.81999 20.7679 8.01399 20.7679 8.20699Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <img src="" alt="" />
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-icon svg-icon-youtube-logo"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22.5401 6.67C22.2881 5.71873 21.5491 4.97331 20.6001 4.713C18.8801 4.25 12.0001 4.25 12.0001 4.25C12.0001 4.25 5.12009 4.25 3.40009 4.713C2.45106 4.97331 1.71211 5.71873 1.46009 6.67C1.14277 8.42869 0.988785 10.213 1.00009 12C0.988785 13.787 1.14277 15.5713 1.46009 17.33C1.71301 18.2825 2.45414 19.0282 3.40509 19.287C5.12009 19.75 12.0051 19.75 12.0051 19.75C12.0051 19.75 18.8851 19.75 20.6001 19.287C21.5491 19.0267 22.2881 18.2813 22.5401 17.33C22.8574 15.5713 23.0114 13.787 23.0001 12C23.0114 10.213 22.8574 8.42869 22.5401 6.67ZM9.75009 15.27V8.729L15.5001 12L9.75009 15.27Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="link-wrapper">
            <ul>
              <li>
                <a href="">자막 및 음성</a>
              </li>
              <li>
                <a href="">화면 해설</a>
              </li>
              <li>
                <a href="">고객 센터</a>
              </li>
              <li>
                <a href="">기프트카드</a>
              </li>
              <li>
                <a href="">미디어 센터</a>
              </li>
              <li>
                <a href="">투자 정보(IR)</a>
              </li>
              <li>
                <a href="">입사 정보</a>
              </li>
              <li>
                <a href="">이용 약관</a>
              </li>
              <li>
                <a href="">개인 정보</a>
              </li>
              <li>
                <a href="">법적 고지</a>
              </li>
              <li>
                <a href="">쿠키 설정</a>
              </li>
              <li>
                <a href="">회사 정보</a>
              </li>
              <li>
                <a href="">문의하기</a>
              </li>
            </ul>
          </div>
          <button className="service-code">서비스 코드</button>
          <div className="copy-text">
            <div className="copy-text-block">
              넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
              제2018-서울종로-0426호 전화번호: 080-001-9587
            </div>
            <div className="copy-text-block">대표: 레지널드 숀 톰프슨</div>
            <div className="copy-text-block">
              이메일 주소: korea@netflix.com
            </div>
            <div className="copy-text-block">
              주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동
              20층 우편번호 03161
            </div>
            <div className="copy-text-block">사업자등록번호: 165-87-00119</div>
            <div className="copy-text-block">
              클라우드 호스팅: Amazon Web Services Inc.
            </div>
            <div>
              <a href="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1658700119">
                공정거래위원회 웹사이트
              </a>
            </div>
            <span className="member-footer-copyright-instance">
              {/* {41473ec3-143b-4425-a9b8-6d01cca282c1} */}
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
