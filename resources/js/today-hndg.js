                // 今日の日付
                var today = new Date();
                // 今日の月
                var todayM = (today.getMonth()+1);
                // 今日の月が１桁の場合、0を足して２桁にする
                if(String(todayM).length == 1) {
                 todayM = '0' + todayM;
                }
                // htmlfileのある場所
                var todaypass = '../../html/';
                // 最終的に選ばれたhtmlファイルへのパス
                var today_hndg_pass;
                // sortされたデータを入れ込む
                 var today_hndg = sort_hndg;
                 // 今日の月と日に合わないものを配列から削除
                 for (let i = 0; i < today_hndg.length; i++) {
                     if(today_hndg[i]['date']['month'] == todayM) {
                         if(today_hndg[i]['date']['day'] == today.getDate()){
                         }else{
                             today_hndg.splice( i , 1 );
                         }
                     }
                 }
                 // today_hndgが配列だった場合、randomにひとつ選びパスを生成
                 if(Array.isArray(today_hndg)) {
                     const random = Math.floor(Math.random() * today_hndg.length);
                     today_hndg_pass = todaypass + (today_hndg[random]['date']['year'] - 2000 ) + '/' + today_hndg[random]['id'] + '/' + today_hndg[random]['id'] +'.html';
                 }else{
                     today_hndg_pass = todaypass + (today_hndg['date']['year'] - 2000 ) + '/' + today_hndg['id'] + '/' + today_hndg['id'] +'.html';
                 }
 
                 location.href = today_hndg_pass;