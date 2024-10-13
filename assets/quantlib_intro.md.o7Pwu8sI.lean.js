import{_ as i,c as t,a2 as e,o as l}from"./chunks/framework.CqrJYmJk.js";const p=JSON.parse('{"title":"퀀트립(QuantLib-Python): 소개","description":"퀀트립(QuantLib)은 금융시장에서의 정량적 분석, 금융상품 가격 책정, 위험 관리, 투자 포트폴리오의 최적화를 위한 금융공학 오픈 소스 라이브러리이다.","frontmatter":{"description":"퀀트립(QuantLib)은 금융시장에서의 정량적 분석, 금융상품 가격 책정, 위험 관리, 투자 포트폴리오의 최적화를 위한 금융공학 오픈 소스 라이브러리이다.","head":[["meta",{"property":"og:title","content":"퀀트립(QuantLib-Python) 소개"}],["meta",{"property":"og:description","content":"퀀트립(QuantLib)은 금융시장에서의 정량적 분석, 금융상품 가격 책정, 위험 관리, 투자 포트폴리오의 최적화를 위한 금융공학 오픈 소스 라이브러리이다."}],["meta",{"property":"og:image","content":"/images/quantlib.jpg"}],["meta",{"property":"og:url","content":"https://haun84.github.io/quantlib/intro"}]]},"headers":[],"relativePath":"quantlib/intro.md","filePath":"ko/quantlib/intro.md","lastUpdated":null}'),n={name:"quantlib/intro.md"};function o(s,a,r,c,h,d){return l(),t("div",null,a[0]||(a[0]=[e(`<h1 id="퀀트립-quantlib-python-소개" tabindex="-1">퀀트립(QuantLib-Python): 소개 <a class="header-anchor" href="#퀀트립-quantlib-python-소개" aria-label="Permalink to &quot;퀀트립(QuantLib-Python): 소개&quot;">​</a></h1><p><strong>퀀트립(QuantLib)은 금융시장에서의 정량적 분석, 금융상품 가격 책정, 위험 관리, 투자 포트폴리오의 최적화를 위한 금융공학 오픈 소스 라이브러리이다.</strong></p><div class="info custom-block"><p class="custom-block-title">Language</p><ul><li><a href="/en/quantlib/intro">English Page: 영어 페이지</a></li></ul></div><h2 id="퀀트립-quantlib-project" tabindex="-1">퀀트립(QuantLib) Project <a class="header-anchor" href="#퀀트립-quantlib-project" aria-label="Permalink to &quot;퀀트립(QuantLib) Project&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">퀀트립 QuantLib</p><ul><li><p><code>QuantLib Project</code> 는 금융 공학 분야에서 널리 사용되는 오픈 소스 라이브러리로, 금융 시장에서의 정량적 분석, 금융 상품의 가격 책정, 위험 관리, 그리고 투자 포트폴리오의 최적화를 위해 설계되었다.</p></li><li><p><code>QuantLib</code> 의 내부는 <code>C++</code> 로 제작되어 빠른 속도를 가지면서도 <code>C#</code>, <code>Java</code>, <code>Python</code>, <code>R</code> 등 다양한 언어에서 사용가능하도록 재포장되어 제공된다.</p></li><li><p><code>QuantLib</code> 은 복잡한 금융 모델을 구현하고, 다양한 금융 도구와 기법을 시뮬레이션하는데 필요한 광범위한 라이브러리를 포함하고 있다.</p></li></ul></div><h2 id="​quantlib-python-package-details" tabindex="-1">​QuantLib Python Package Details <a class="header-anchor" href="#​quantlib-python-package-details" aria-label="Permalink to &quot;​QuantLib Python Package Details&quot;">​</a></h2><ul><li>Author : QuantLib Team</li><li>License : BSD 3-Clause (소스 코드 공개 의무 없으며 상업적 이용에도 제한 없음)</li><li><a href="https://www.quantlib.org/" target="_blank" rel="noreferrer">quantlib.org</a></li><li><a href="https://quantlib-python-docs.readthedocs.io/en/latest/" target="_blank" rel="noreferrer">QuantLib-Python</a></li><li><a href="https://pypi.org/project/QuantLib/" target="_blank" rel="noreferrer">Pypi</a></li><li><a href="https://github.com/lballabio/quantlib" target="_blank" rel="noreferrer">GitHub Repo</a></li><li>Python Package install using pip</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> QuantLib</span></span></code></pre></div><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> QuantLib </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ql</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ql.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">__version__</span></span></code></pre></div><h2 id="주요-기능" tabindex="-1">주요 기능 <a class="header-anchor" href="#주요-기능" aria-label="Permalink to &quot;주요 기능&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">Key Features</p><ul><li><code>금융상품 가격 책정</code> : 옵션, 채권, 스왑 등 다양한 금융 상품의 가격 책정</li><li><code>수익률 곡선 구축</code> : 다양한 수익률 곡선 모델을 사용하여 시장 데이터로부터 수익률 곡선을 구축</li><li><code>리스크 관리</code> : 시장 리스크, 신용 리스크 등 다양한 유형의 금융 리스크를 측정하고 관리</li><li><code>날짜 및 시간 계산</code> : 금융 시장에서 중요한 날짜 계산, 일정 관리, 만기일 계산 등을 지원</li></ul></div><h2 id="적용-사례" tabindex="-1">적용 사례 <a class="header-anchor" href="#적용-사례" aria-label="Permalink to &quot;적용 사례&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">Application Case</p><ul><li><code>금융 기관</code> : 은행, 투자 회사, 보험 회사 등에서 자산 가격 책정, 리스크 관리 전략 개발에 활용</li><li><code>학술 연구</code> : 금융공학, 경제학, 수학 등의 분야에서 연구 및 교육 목적으로 활용</li><li><code>투자 전략 개발</code> : 알고리즘 트레이딩, 포트폴리오 최적화, 금융 모델링에 필요한 도구 제공</li></ul></div><h2 id="결론" tabindex="-1">결론 <a class="header-anchor" href="#결론" aria-label="Permalink to &quot;결론&quot;">​</a></h2><div class="danger custom-block"><p class="custom-block-title">결론</p><ul><li><p><code>QuantLib</code> 라이브러리는 금융 분야 전문가들에게 꼭 필요한 강력한 도구이다. 휴일 일자 관리, 금융시장 관행, 부트스트래핑 등 구현하기 까다로운 기능들을 쉽고 빠르게 구현할 수 있게 해주어 다양한 금융 상품의 가격 책정, 위험 관리, 시장 분석 등 복잡한 금융 계산과 모델링 작업을 수행할 수 있게 해준다.</p></li><li><p>오픈 소스이기 때문에 은행, 투자 기관 등 금융 IT 인프라가 충실히 갖춰져 있지 않은 곳에서도 개발자와 연구자들이 자유롭게 사용하고, 필요에 따라 개선하거나 확장할 수 있다. <code>QuantLib</code> 은 금융 공학의 실제 적용을 위한 실질적이고 효율적인 접근을 제공한다.</p></li></ul></div><h2 id="목차" tabindex="-1">목차 <a class="header-anchor" href="#목차" aria-label="Permalink to &quot;목차&quot;">​</a></h2><ul><li><a href="/quantlib/intro">퀀트립(QuantLib-Python): 소개</a></li><li><a href="/quantlib/examples">퀀트립(QuantLib-Python): 예제</a></li><li><a href="/quantlib/date">퀀트립(QuantLib-Python): Date 클래스</a></li><li>[퀀트립(QuantLib-Python): Period 클래스]</li><li>[퀀트립(QuantLib-Python): Calendar 클래스]</li><li>[퀀트립(QuantLib-Python): DayCounter 클래스]</li><li>[퀀트립(QuantLib-Python): Schedule 클래스]</li><li>[퀀트립(QuantLib-Python): Quote 클래스]</li><li>[퀀트립(QuantLib-Python): InterestRate 클래스]</li></ul>`,17)]))}const b=i(n,[["render",o]]);export{p as __pageData,b as default};
