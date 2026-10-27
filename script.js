/**
 * Cafe Blossom（カフェ ブロッサム）公式ホームページ 動作スクリプト
 * --------------------------------------------------------------------------
 * 【このファイルで行っていること】
 * 1. スマートフォン用メニュー（ハンバーガーボタン）の開閉・背景スクロール制御・Escキー対応
 * 2. スクロールに合わせたヘッダーの影表示と、現在見ている項目のナビ強調
 * 3. スクロールしたときに写真や文章がふんわり咲くように現れる演出
 * 4. おたよりフォームのやさしい入力確認と、サンプル送信完了メッセージの表示
 * 5. 公式Instagramボタンが準備中（href="#"）のときのやさしい案内表示
 *    （※将来 index.html の href="#" を本物のURLに書き換えると、自動でInstagramへ移動するようになります！）
 */

document.addEventListener('DOMContentLoaded', () => {
  /* ========================================================================
     1. スマートフォン用ハンバーガーメニューの開閉制御
     ======================================================================== */
  const menuToggle = document.getElementById('menu-toggle');
  const menuToggleLabel = document.getElementById('menu-toggle-label');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerBackdrop = document.getElementById('mobile-drawer-backdrop');

  // メニューを開く・閉じる共通関数
  const setDrawerState = (isOpen) => {
    if (!menuToggle || !mobileDrawer) return;

    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
    if (menuToggleLabel) {
      menuToggleLabel.textContent = isOpen ? 'CLOSE' : 'MENU';
    }

    mobileDrawer.classList.toggle('is-open', isOpen);
    mobileDrawer.setAttribute('aria-hidden', String(!isOpen));
    document.body.classList.toggle('is-drawer-open', isOpen);
  };

  if (menuToggle && mobileDrawer) {
    // 右上のボタンをタップしたとき
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      setDrawerState(!isExpanded);
    });

    // 背景の暗い部分をタップしたときに閉じる
    if (drawerBackdrop) {
      drawerBackdrop.addEventListener('click', () => {
        setDrawerState(false);
      });
    }

    // メニュー内のリンクをタップしたら自動で閉じて該当箇所へ移動する
    const drawerLinks = mobileDrawer.querySelectorAll('a[href^="#"]');
    drawerLinks.forEach((link) => {
      link.addEventListener('click', () => {
        setDrawerState(false);
      });
    });

    // キーボードの「Esc（エスケープ）」キーが押されたときに閉じる
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && mobileDrawer.classList.contains('is-open')) {
        setDrawerState(false);
        menuToggle.focus();
      }
    });

    // 画面幅がタブレット・PCサイズ（768px以上）に広がったらスマホメニューを自動で閉じる
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768 && mobileDrawer.classList.contains('is-open')) {
        setDrawerState(false);
      }
    });
  }

  /* ========================================================================
     2. ヘッダーのスクロール影表示 ＆ 現在位置のナビゲーション強調
     ======================================================================== */
  const siteHeader = document.getElementById('site-header');

  const updateHeaderShadow = () => {
    if (!siteHeader) return;
    siteHeader.classList.toggle('is-scrolled', window.scrollY > 16);
  };

  updateHeaderShadow();
  window.addEventListener('scroll', updateHeaderShadow, { passive: true });

  // 現在画面に表示されているセクションに合わせて、PCヘッダーのリンクに下線を付ける
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.global-nav__link[href^="#"]');

  if ('IntersectionObserver' in window && sections.length > 0 && navLinks.length > 0) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = `#${entry.target.id}`;
            navLinks.forEach((link) => {
              link.classList.toggle('is-active', link.getAttribute('href') === currentId);
            });
          }
        });
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: 0
      }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }

  /* ========================================================================
     3. スクロール時のふんわりフェードイン演出（.js-fade-up）
     ======================================================================== */
  const fadeElements = document.querySelectorAll('.js-fade-up');

  if (fadeElements.length > 0) {
    if ('IntersectionObserver' in window) {
      const fadeObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              // 一度表示された要素は監視を終了して動作を軽く保つ
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '0px 0px -40px 0px',
          threshold: 0.12
        }
      );

      fadeElements.forEach((el) => fadeObserver.observe(el));
    } else {
      // 古いブラウザでも必ず文字や写真が見えるようにする安全対策
      fadeElements.forEach((el) => el.classList.add('is-visible'));
    }
  }

  /* ========================================================================
     4. おたより・お問い合わせフォームの入力チェック＆サンプル送信動作
     （※index.html からおたよりセクションを丸ごと削除した場合もエラーになりません）
     ======================================================================== */
  const contactForm = document.getElementById('contact-form');
  const contactThanks = document.getElementById('contact-thanks');
  const contactThanksSummary = document.getElementById('contact-thanks-summary');
  const contactResetBtn = document.getElementById('contact-reset-btn');

  if (contactForm && contactThanks) {
    const topicField = document.getElementById('contact-topic');
    const messageField = document.getElementById('contact-message');
    const nameField = document.getElementById('contact-name');
    const emailField = document.getElementById('contact-email');

    // エラーメッセージを表示・クリアする補助関数
    const setFieldError = (field, errorId, message) => {
      const errorEl = document.getElementById(errorId);
      if (!field || !errorEl) return;

      if (message) {
        field.classList.add('is-invalid');
        field.setAttribute('aria-invalid', 'true');
        errorEl.textContent = message;
        errorEl.hidden = false;
      } else {
        field.classList.remove('is-invalid');
        field.removeAttribute('aria-invalid');
        errorEl.textContent = '';
        errorEl.hidden = true;
      }
    };

    // 入力し直したタイミングでエラー表示をやさしく消す
    const watchFields = [
      { el: topicField, errorId: 'error-topic', eventName: 'change' },
      { el: messageField, errorId: 'error-message', eventName: 'input' },
      { el: nameField, errorId: 'error-name', eventName: 'input' },
      { el: emailField, errorId: 'error-email', eventName: 'input' }
    ];

    watchFields.forEach(({ el, errorId, eventName }) => {
      if (!el) return;
      el.addEventListener(eventName, () => {
        setFieldError(el, errorId, '');
      });
    });

    // 「おたよりを送る」ボタンが押されたとき
    contactForm.addEventListener('submit', (event) => {
      // ページが再読み込みされないように止める
      event.preventDefault();

      let firstInvalidField = null;

      // ① ご用件の確認
      if (!topicField.value) {
        setFieldError(topicField, 'error-topic', 'ご用件をお選びください。');
        firstInvalidField = firstInvalidField || topicField;
      } else {
        setFieldError(topicField, 'error-topic', '');
      }

      // ② メッセージ内容の確認
      if (!messageField.value.trim()) {
        setFieldError(messageField, 'error-message', 'メッセージ内容をご入力ください。');
        firstInvalidField = firstInvalidField || messageField;
      } else {
        setFieldError(messageField, 'error-message', '');
      }

      // ③ お名前の確認
      if (!nameField.value.trim()) {
        setFieldError(nameField, 'error-name', 'お名前（またはニックネーム）をご入力ください。');
        firstInvalidField = firstInvalidField || nameField;
      } else {
        setFieldError(nameField, 'error-name', '');
      }

      // ④ メールアドレスの確認
      const emailValue = emailField.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailValue) {
        setFieldError(emailField, 'error-email', 'お返事先のメールアドレスをご入力ください。');
        firstInvalidField = firstInvalidField || emailField;
      } else if (!emailPattern.test(emailValue)) {
        setFieldError(emailField, 'error-email', 'メールアドレスの形式（例：sakura@example.com）をご確認ください。');
        firstInvalidField = firstInvalidField || emailField;
      } else {
        setFieldError(emailField, 'error-email', '');
      }

      // 未入力の項目がある場合は、最初の項目へカーソルを合わせる
      if (firstInvalidField) {
        firstInvalidField.focus();
        return;
      }

      // すべて入力されていれば、ご入力内容を安全に表示してお礼画面へ切り替える
      if (contactThanksSummary) {
        contactThanksSummary.textContent = '';
        const nameLine = document.createElement('p');
        nameLine.textContent = `お名前：${nameField.value.trim()} 様`;
        const topicLine = document.createElement('p');
        topicLine.textContent = `ご用件：${topicField.value}`;
        contactThanksSummary.appendChild(nameLine);
        contactThanksSummary.appendChild(topicLine);
      }

      contactForm.hidden = true;
      contactThanks.hidden = false;

      // お礼メッセージが画面内に見やすいよう軽く位置を整える
      contactThanks.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    // 「入力画面に戻る」ボタンが押されたとき
    if (contactResetBtn) {
      contactResetBtn.addEventListener('click', () => {
        contactForm.reset();
        contactThanks.hidden = true;
        contactForm.hidden = false;
      });
    }
  }

  /* ========================================================================
     5. 公式Instagramリンク（準備中）クリック時のやさしい案内表示
     ======================================================================== */
  const instagramLink = document.getElementById('instagram-link');
  const instagramNotice = document.getElementById('instagram-notice');

  if (instagramLink && instagramNotice) {
    instagramLink.addEventListener('click', (event) => {
      const href = instagramLink.getAttribute('href') || '';
      // ★ href が "#"（準備中）の間だけページ先頭へのジャンプを止め、案内メッセージを表示します。
      // ★ 将来オーナー様が href="https://www.instagram.com/..." に書き換えると、そのままInstagramが開きます！
      if (href === '#' || href.trim() === '') {
        event.preventDefault();
        instagramNotice.hidden = false;
      }
    });
  }
});
