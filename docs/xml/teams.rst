チーム
======

各マップには最低2つ以上のチームが必要です。

多くのマップでは2つのチームが設定されていますが、2つ以上のチームを設定する事も可能です。

.. code-block:: xml

   <teams>
     <team color="blue" max="24">Blue Team</team>
     <team color="red" max="24">Red Team</team>
   </teams>

<team>タグの属性
^^^^^^^^^^^^^^^^

.. csv-table::
   :header: 属性, 説明

   ``color``, チームの色です。指定可能な色は :doc:`ChatColor </data/chatcolor>` をご覧ください。
   ``max``, チームに参加可能な最大人数を指定します。

.. code-block::
   <!-- 例:4チームに設定した場合 -->
   <teams>
     <team color="blue" max="12">Blue Team</team>
     <team color="red" max="12">Red Team</team>
　　 <team color="green" max="12">Green Team</team>
　　 <team color="yellow" max="12">Yellow Team</team>
   </teams>

.. warning::

   サーバーの接続上限以上のチーム設定をするとチームには空きがあるのにサーバーに入れない状態が起きます。

.. warning::

   サーバ毎に参加人数の下限を設定しております。
   参加人数の下限は以下の通りとなります。以下の下限設定に満たないマップは却下されます。

   .. csv-table::
      :header: サーバ名, 全チーム合計最低人数

      Sabatora / Sabatora 2, 48
      Chatora / Chatora 2, 32
      CTW, 40
      Hachiware, 32
      Blitz, 16
      Walls, 24
      Paintball, 24
      TNT, 24