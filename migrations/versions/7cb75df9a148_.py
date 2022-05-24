"""empty message

Revision ID: 7cb75df9a148
Revises: fa9133058635
Create Date: 2022-05-24 20:31:36.578549

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7cb75df9a148'
down_revision = 'fa9133058635'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'profile_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'profile_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    # ### end Alembic commands ###
