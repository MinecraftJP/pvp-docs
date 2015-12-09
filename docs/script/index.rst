マップスクリプトリファレンス
#################################

マップスクリプトはゲーム内に動的な変更を加える事が出来るJavaScriptです。マップのロード時にサーバ側で実行されます。

マップスクリプトはmap.xml内に ``<script>`` タグで囲んで記述します。

.. code-block:: xml

   <map>
       <script>
   <![CDATA[
   // ゲーム開始時イベント
   match.on('start', function() {
       match.broadcast('ゲーム開始！');
        if (Math.random() >= 0.5) { // 1/2の確率で左側の道を塞ぐ
           for (var x = -10; x < -6; x++) {
               for (var y = 10; y < 16; y++) {
                   match.getWorld().setBlock(x, y, 0, 'BRICK', 0);
               }
           }
       } else { // 1/2の確率で右側の道を塞ぐ
           for (var x = 6; x < 10; x++) {
               for (var y = 10; y < 16; y++) {
                   match.getWorld().setBlock(x, y, 0, 'BRICK', 0);
               }
           }
       }

       // 30秒毎に雷を落とす
       setInterval(function() {
           var x = getRandom(-50, 50);
           var z = getRandom(-50, 50);
           match.getWorld().strikeLightning(x, 0, z, false);
       }, 30000);

       // 180秒後に呼び出す
       setTimeout(function() {
           match.broadcast('`a3分経過しましたよ(´・ω・｀)');
       }, 180000);
   });

   function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
   }
   ]]>
       </script>
   </map>

``src=""`` 属性を指定する事でマップディレクトリ内にあるJavaScriptファイルを読み込むことも出来ます。

.. code-block:: xml

   <map>
       <script src="map.js"/>
   </map>

.. toctree::
   :maxdepth: 2

   match
   map
   world
   team
   player
   objective
   itemstack
   eventemitter
