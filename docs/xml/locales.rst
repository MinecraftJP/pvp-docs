他言語化
========

``<locales>`` ノードにより、マップ内でプレイヤーに表示されるテキストをクライアントの設定言語に合わせた表示にすることができます。
現時点で多言語化可能なテキストは ``<objective>`` ノード、 ``<apply>`` ノードのmessage属性、クラス説明、ショップ名のテキストです

.. code-block:: xml

   <locales>
     <!-- 日本語 -->
     <locale lang="ja_JP">
         <string name="Grab the wool from the enemy's wool room and place it on your victory monument." value="敵の羊毛ルームから羊毛を奪取し、台座に設置"/>
         <string name="You may not modify base." value="拠点は編集出来ません。"/>
     </locale>
     <!-- フランス語 -->
     <locale lang="fr_FR">
         <string name="Grab the wool from the enemy's wool room and place it on your victory monument." value="Prenez la laine de la chambre de laine de l'ennemi et placez-le sur votre monument de la victoire."/>
         <string name="You may not modify base." value="Vous ne pouvez pas modifier la base."/>
     </locale>
     <!-- ポルトガル語/ブラジル -->
     <locale lang="pt_BR">
         <string name="Grab the wool from the enemy's wool room and place it on your victory monument." value="Agarre a lã de sala de lã do inimigo e colocá-lo em sua vitória monumento."/>
         <string name="You may not modify base." value="Você não pode modificar base."/>
     </locale>
     <!-- 中国語繁体字/台湾 -->
     <locale lang="zh_TW">
         <string name="Grab the wool from the enemy's wool room and place it on your victory monument." value="從敵人的羊毛房間奪取羊毛，為台座設置"/>
         <string name="You may not modify base." value="您不得修改基地"/>
     </locale>
   </locales>
