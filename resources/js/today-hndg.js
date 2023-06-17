                // 今日の日付
                var today = new Date();
                // 今日の月
                var todayM = (today.getMonth()+1);
                var todayD = today.getDate();
                // htmlfileのある場所
                var todaypass = 'https://phy-hndg.github.io/collect-hndg/html/';
                // 最終的に選ばれたhtmlファイルへのパス
                var today_hndg_pass ='';
                // sortされたデータを入れ込む
                const today_hndg = [];
                var today_hndg_result = [];
                // 今日の月と日に合わないものを配列から削除
                for (let i = 0; i < handg_top.length; i++) {
                    if(handg_top[i]['date']['month'] === todayM) {
                        if(handg_top[i]['date']['day'] === todayD){
                            today_hndg.push(handg_top[i]);
                        }
                    }
                }

                if (today_hndg.length === 0){
                    today_hndg_pass = 'hndg-top.html';
                }else {
                    // today_hndgが配列だった場合、randomにひとつ選びパスを生成}
                    const random = Math.floor(Math.random() * today_hndg.length);
                    today_hndg_pass = todaypass + (today_hndg[random]['date']['year'] - 2000 ) + '/' + today_hndg[random]['id'] +'.html';
                }

                location.href = today_hndg_pass;