アイテム
========

``<item>`` タグはキットやクラスなどでアイテム指定に使用します。

.. warning::

   将来的な変更の為アイテムIDの使用をしないでください。

.. code-block:: xml

   <item>アイテム名</item>
   <!--
   <item>タグの属性
   slot="0"
   damage="0"
   amount="1"
   enchantment="ENCHANTNAME:LEVEL"
   name="NAME"
   lore="LORE"
   -->

アイテム名は :doc:`Material </data/material>` をご覧ください。 すべてのアイテム名は小文字から大文字、スペースはアンダーバーに自動変換されます。

<item>タグの属性
^^^^^^^^^^^^^^^^^

.. |inventory_image| image:: /img/inventory.png

.. csv-table::
   :header:  属性, 説明, 値

   ``slot``, アイテムが配置されるインベントリ内の位置を指定します。|br| |inventory_image|, 整数
   ``amount``, アイテムの数を1～64個の範囲内で指定します。, 1～64
   ``damage``, 属性にはアイテムのダメージ値(データ)を指定します。, 整数
   ``enchantment``, アイテムに付与するエンチャントを指定します。エンチャントは;区切りで複数指定可能です。, Enchantment String
   ``name``, カスタムアイテム名を指定します。(システム的には対応していますが英語以外のアイテム名は記入しないでください。), 文字列
   ``lore``, アイテムの説明などを指定します。, 文字列
   ``bind``, アイテムにSoulbound属性を付与し、他のプレイヤーへのアイテムの受け渡し、死亡時のドロップが無効になります。, Boolean
   ``locked``, アイテムにLocked属性を付与し、スロットの変更を禁止します。(装備に使われた場合は装備の変更が出来なくなります。), Boolean

エンチャント
^^^^^^^^^^^^^^

エンチャントタイプとレベルを ``:`` で区切って指定します。 ``;`` 区切りで複数指定可能です。 指定可能なエンチャントタイプは :doc:`Enchantment </data/enchantment>` をご覧ください。

.. code-block:: xml

   <item enchantment="dig speed:1;durability:2">diamond pickaxe</item>

カスタムポーション
^^^^^^^^^^^^^^^^^^^

ポーションへ追加するポーション効果を ``potion_name:duration:amplifier:ambient`` 形式で指定します。 ``;`` 区切りで複数指定可能です。

.. csv-table::
   :header: 属性, 説明, 値

   ``potion_name``, ポーション効果タイプ, :doc:`PotionEffectType </data/potioneffecttype>`
   ``duration``, ポーション効果時間(tick), 整数
   ``amplifier``, ポーション効果レベル, 整数
   ``ambient``, エフェクトの有無, Boolean

.. code-block:: xml

   <item damage="8227" name="`6Hayai Potion" potions="speed:900:0:false">potion</item>

装備
^^^^^
アイテムを装備させるには下記のタグを使用する事で適切な位置にセットされます。属性については<item>タグと同じものを使用出来ます。

.. csv-table::
   :header: 属性, 説明

   ``color``, 革製の装備の着色に使用します。カラーコード

.. code-block:: xml

   <!-- 例:頭にダイヤヘルメット、胸に金の防具、ズボンに鉄、ブーツを革製に -->
   <helmet>diamond helmet</helmet>
   <chestplate>gold chestplate</chestplate>
   <leggings>iron leggings</leggings>
   <boots>leather boots</boots>


