ダメージの無効化
================

<disabledamage>ノードを定義する事により、一部のダメージを無効化する事が出来ます。

.. code-block:: xml

   <disabledamage>
     <damage>fall</damage>
     <damage>block explosion</damage>
   </disabledamage>

指定可能なダメージの種類は下記の通りです。

.. csv-table::
   :header: 種類, 説明

   BLOCK_EXPLOSION, ブロックの爆発
   CONTACT, サボテンとの接触
   CUSTOM, カスタムダメージ
   DROWNING, 水中の酸欠
   ENTITY_ATTACK, Entityの攻撃
   ENTITY_EXPLOSION, Entityの爆発
   FALL, 落下
   FALLING_BLOCK, 落下ブロックとの接触
   FIRE, 炎との接触
   FIRE_TICK, 炎による時間ダメージ
   LAVA, 溶岩との接触
   LIGHTNING, 雷との接触
   MAGIC, 魔法ダメージ
   MELTING,
   POISON, 毒
   PROJECTILE, 矢などとの接触
   STARVATION, 飢餓
   SUFFOCATION, 生き埋め
   THORNS, 棘エンチャント
   SUICIDE, 自殺
   VOID, Voidダメージ(使用しないでください。)
   WITHER, Witherによる毒効果

